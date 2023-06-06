import zod from "@/constants/zod-messages";
import { useEffect, useMemo } from "react";
import { SigninFormValues } from "./types";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import request from "@/utils/axios/axios";
import ErrorHandler from "@/utils/error-handler/error-handler";
import createToast from "@/utils/toast/toast";
import { useRouter } from "next/navigation";
import useUserStore from "@/context/user/user-store";
import { useBoolean } from "usehooks-ts";
import { api } from "@/constants/api";
import { qu } from "@/components/share/container/query-client/query-client";

const useSignin = () => {
  const searchParams = useSearchParams();
  const returnParam = searchParams.get("return");
  const rounter = useRouter();

  const [userStatus, setUserStatus] = useUserStore((state) => [
    state.status,
    state.manualSetStatus,
  ]);
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
      url: api.login,
    });
  };

  const mutation = useMutation({
    mutationFn: (data: Object) => mutationFn(data),
    onSettled() {
      setLoading(false);
    },
    onSuccess({ data }) {
      setUserStatus("AUTHENTICATED");
      createToast({ title: "ورود موفقیت آمیز بود", icon: "success" });
      localStorage.setItem("token", data.access);
      setTimeout(() => {
        rounter.replace(`${returnParam ?? "/user"}`);
      }, 100);
    },
    onError(error) {
      ErrorHandler(error, "/login");
    },
  });

  const validation = useMemo(() => {
    return zod.object({
      email: zod.string().email(),
      password: zod.string().min(1).max(16),
    });
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<SigninFormValues>({
    values: { email: "", password: "" },
    resolver: zodResolver(validation),
  });

  useEffect(() => {
    const user = qu.getQueryData(["user-auth"]) as
      | { email: string; pass: string }
      | undefined;
    if (user) {
      setValue("email", user.email, {
        shouldDirty: true,
        shouldValidate: true,
      });
      setValue("password", user.pass, {
        shouldDirty: true,
        shouldValidate: true,
      });
    }
  }, []);

  const onSubmit: SubmitHandler<SigninFormValues> = (data) => {
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
export default useSignin;
