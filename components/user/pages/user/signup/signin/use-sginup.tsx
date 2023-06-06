import zod from "@/constants/zod-messages";
import { useEffect, useMemo } from "react";
import { SignupFormValues } from "./types";
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

const useSignup = () => {
  const searchParams = useSearchParams();
  const returnParam = searchParams.get("return");
  const rounter = useRouter();

  const [userStatus] = useUserStore((state) => [state.status]);
  const { value: loading, setValue: setLoading } = useBoolean(false);
  const { value: showUniField, setValue: setShowUniFiled } = useBoolean(false);

  useEffect(() => {
    if (userStatus === "AUTHENTICATED") {
      rounter.replace("/");
    }
  }, [userStatus]);

  const validation = useMemo(() => {
    return zod.object({
      fullName: zod.string().min(4).max(56),
      studentNumber: zod.string().min(2).max(12),
      email: zod.string().email(),
      isQut: zod.optional(zod.boolean()),
      password: zod.string().min(1).max(16),
      university: zod.string(),
    });
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    getValues,
  } = useForm<SignupFormValues>({
    values: {
      email: "",
      password: "",
      fullName: "",
      isQut: true,
      studentNumber: "",
      university: "",
    },
    resolver: zodResolver(validation),
  });
  const mutationFn = (data: Object) => {
    setLoading(true);
    return request<{ access: string }>({
      method: "POST",
      data,
      url: api.register,
    });
  };

  const mutation = useMutation({
    mutationFn: (data: Object) => mutationFn(data),
    onSettled() {
      setLoading(false);
    },
    onSuccess() {
      createToast({ title: "ثبت نام موفقیت آمیز بود", icon: "success" });
      rounter.replace(`${returnParam ?? "/user/signin"}`);
      qu.setQueryData(["user-auth"], {
        email: getValues("email"),
        pass: getValues("password"),
      });
    },
    onError(error) {
      ErrorHandler(error, "/register");
    },
  });

  useEffect(() => {
    const subscription = watch((value) => {
      setShowUniFiled(!value.isQut);
    });
    return () => subscription.unsubscribe();
  }, [watch]);
  const onSubmit: SubmitHandler<SignupFormValues> = (data) => {
    if (!getValues("isQut")) {
      const length = getValues("university").trim().length as number;
      console.log(getValues("university"));
      if (length === 0) {
        createToast({
          icon: "error",
          text: "فیلد نام دانشگاه نمیتواند خالی باشد",
        });
        return;
      }
    }

    const formData = {
      email: data.email,
      full_name: data.fullName,
      student_number: data.studentNumber,
      university: data.isQut ? "دانشگاه صنعتی قم" : data.university,
      password: data.password,
      confirm_password: data.password,
    };
    console.log(formData);
    mutation.mutate(formData);
  };

  return {
    onSubmit: handleSubmit(onSubmit),
    register,
    errors,
    userStatus,
    loading,
    showUniField,
  };
};
export default useSignup;
