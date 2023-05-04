import zod from "@/constants/zod-messages";
import { useMemo } from "react";
import { ContactUsFormValues } from "./types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useBoolean } from "usehooks-ts";
import request from "@/utils/axios/axios";
import { useMutation } from "@tanstack/react-query";
import createToast from "@/utils/toast/toast";
import ErrorHandler from "@/utils/error-handler/error-handler";
import { SubmitHandler, useForm } from "react-hook-form";

const useContactUs = () => {
  const { value: loading, setValue: setLoading } = useBoolean(false);

  const mutationFn = (data: Object) => {
    setLoading(true);
    return request({ method: "POST", data, url: "/contact-us" });
  };

  const mutation = useMutation({
    mutationFn: (data: Object) => mutationFn(data),
    onSettled() {
      setLoading(false);
    },
    onSuccess() {
      createToast({ title: "پیام شما با موفقیت ارسال شد", icon: "success" });
      reset();
    },
    onError(error) {
      ErrorHandler(error, "/contact-us");
    },
  });

  const validation = useMemo(() => {
    return zod.object({
      title: zod.string().min(3),
      email: zod.string().email(),
      message: zod.string().min(10),
    });
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactUsFormValues>({
    values: { email: "", message: "", title: "" },
    resolver: zodResolver(validation),
  });

  const onSubmit: SubmitHandler<ContactUsFormValues> = (data) => {
    mutation.mutate(data);
  };
  return {
    onSubmit: handleSubmit(onSubmit),
    register,
    errors,
    loading,
  };
};

export default useContactUs;
