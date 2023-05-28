import zod from "@/constants/zod-messages";
import { useEffect, useMemo, useState } from "react";
import { UserDetail, UserEditFormValues } from "./types";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "next/navigation";
import { useMutation, useQuery } from "@tanstack/react-query";
import request from "@/utils/axios/axios";
import ErrorHandler from "@/utils/error-handler/error-handler";
import createToast from "@/utils/toast/toast";
import { useRouter } from "next/navigation";
import useUserStore from "@/context/user/user-store";
import { useBoolean } from "usehooks-ts";
import { api } from "@/constants/api";

const useUser = () => {
  const [userStatus] = useUserStore((state) => [state.status]);
  const { value: loading, setValue: setLoading } = useBoolean(false);
  const { toggle } = useBoolean(false);

  const mutationFn = (data: Object) => {
    setLoading(true);
    return request({ method: "POST", data, url: "/edit-user" });
  };

  const mutation = useMutation({
    mutationFn: (data: Object) => mutationFn(data),
    onSettled() {
      setLoading(false);
    },
    onSuccess() {
      createToast({ title: "ویرایش اطلاعات موفقیت آمیز بود", icon: "success" });
    },
    onError(error) {
      ErrorHandler(error, "/user-edit");
    },
  });

  const validation = useMemo(() => {
    return zod.object({
      fullname: zod.string().min(2).max(64),
      studentNumber: zod.string().min(4).max(18),
    });
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<UserEditFormValues>({
    values: { fullname: "", studentNumber: "" },
    resolver: zodResolver(validation),
  });

  const onSubmit: SubmitHandler<UserEditFormValues> = (data) => {
    if (loading) return;
    mutation.mutate(data);
  };

  const queryFn = () => {
    return request<UserDetail>({
      method: "GET",
      url: api.userProfile,
    });
  };

  const { isLoading, data } = useQuery({
    queryFn,
    queryKey: ["user"],
  });

  useEffect(() => {
    const apiData = data?.data;
    console.log(data);
    if (apiData) {
      // setValue("fullname", apiData.fullname, { shouldDirty: true });
      // setValue("studentNumber", apiData.studentNumber, { shouldDirty: true });
      // force update for solve input problems
      toggle();
    }
  }, [data]);

  return {
    onSubmit: handleSubmit(onSubmit),
    register,
    errors,
    userStatus,
    loading,
    userDataLoading: isLoading,
  };
};
export default useUser;
