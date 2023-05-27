import zod from "@/constants/zod-messages";
import { useEffect, useMemo } from "react";
import { ChangePassFormValues } from "./types";
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

const useChangePass = () => {
  const rounter = useRouter();

  const [userStatus] = useUserStore((state) => [state.status]);
  const { value: loading, setValue: setLoading } = useBoolean(false);

  const email = qu.getQueryData(["email"]);
  const validation = useMemo(() => {
    return zod
      .object({
        email: zod.string().email(),
        password: zod.string().min(8).max(16),
        confirm: zod.string(),
        code: zod.string().length(8),
      })
      .refine((data) => data.password === data.confirm, {
        message: "رمز عبور ها مطابقت ندارند",
        path: ["confirm"],
      });
  }, []);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ChangePassFormValues>({
    values: { password: "", confirm: "", email: "", code: "" },
    resolver: zodResolver(validation),
  });

  useEffect(() => {
    if (userStatus === "AUTHENTICATED" || !email) {
      rounter.replace("/");
    }
    if (email) {
      setValue("email", email as string, {
        shouldDirty: true,
        shouldValidate: true,
      });
    }
  }, [userStatus, email]);

  const mutationFn = (data: Object) => {
    setLoading(true);
    return request<{ access: string }>({
      method: "POST",
      data,
      url: api.changePass,
    });
  };

  const mutation = useMutation({
    mutationFn: (data: Object) => mutationFn(data),
    onSettled() {
      setLoading(false);
    },
    onSuccess() {
      createToast({
        title: "رمز عبور شما با موفقیت تغییر کرد",
        icon: "success",
      });
      // rounter.replace("/user/signin");
    },
    onError(error) {
      ErrorHandler(error, "/change-pass");
    },
  });

  const onSubmit: SubmitHandler<ChangePassFormValues> = (data) => {
    mutation.mutate({
      new_password: data.password,
      confirm_new_password: data.confirm,
      code: data.code,
      email: data.email,
    });
  };
  return {
    onSubmit: handleSubmit(onSubmit),
    register,
    errors,
    userStatus,
    loading,
  };
};
export default useChangePass;
