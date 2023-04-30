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

const useSignin = () => {
  const searchParams = useSearchParams();
  const returnParam = searchParams.get("return");
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
    return request({ method: "POST", data, url: "/login" });
  };

  const mutation = useMutation({
    mutationFn: (data: Object) => mutationFn(data),
    onSettled() {
      setLoading(false);
    },
    onSuccess() {
      createToast({ title: "ورود موفقیت آمیز بود", icon: "success" });
      rounter.replace(`${returnParam ?? "/user"}`);
    },
    onError(error) {
      ErrorHandler(error, "/login");
    },
  });

  const validation = useMemo(() => {
    return zod.object({
      email: zod.string().email(),
      password: zod.string().min(8).max(16),
    });
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninFormValues>({
    values: { email: "", password: "" },
    resolver: zodResolver(validation),
  });

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
