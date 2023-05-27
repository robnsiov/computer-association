import zod from "@/constants/zod-messages";
import { useEffect, useMemo } from "react";
import { ForgotPassFormValues } from "./types";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import request from "@/utils/axios/axios";
import ErrorHandler from "@/utils/error-handler/error-handler";
import createToast from "@/utils/toast/toast";
import { useRouter } from "next/navigation";
import useUserStore from "@/context/user/user-store";
import { useBoolean } from "usehooks-ts";
import { api } from "@/constants/api";
import { qu } from "@/components/share/container/query-client/query-client";

const useForgotPass = () => {
  const rounter = useRouter();

  const [userStatus] = useUserStore((state) => [state.status]);
  const { value: loading, setValue: setLoading } = useBoolean(false);

  useEffect(() => {
    if (userStatus === "AUTHENTICATED") {
      rounter.replace("/");
    }
  }, [userStatus]);

  const mutationFn = (data: Object) => {
    setLoading(true);
    return request<{ access: string }>({
      method: "POST",
      data,
      url: api.forgotPass,
    });
  };

  const mutation = useMutation({
    mutationFn: (data: Object) => mutationFn(data),
    onSettled() {
      setLoading(false);
    },
    onSuccess() {
      createToast({
        title: "کد اعتبار سنجی برای شما ارسال شد",
        icon: "success",
      });
      rounter.replace("/user/change-pass");
    },
    onError(error) {
      ErrorHandler(error, "/forgot-pass");
    },
  });

  const validation = useMemo(() => {
    return zod.object({
      email: zod.string().email(),
    });
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPassFormValues>({
    values: { email: "" },
    resolver: zodResolver(validation),
  });

  const onSubmit: SubmitHandler<ForgotPassFormValues> = (data) => {
    qu.setQueryData(["email"], data.email);
    mutation.mutate(data);
  };
  return {
    onSubmit: handleSubmit(onSubmit),
    register,
    errors,
    userStatus,
    loading,
  };
};
export default useForgotPass;
