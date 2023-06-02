import zod from "@/constants/zod-messages";
import { ChangeEventHandler, useEffect, useMemo, useState } from "react";
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
  const [imageSrc, setImageSrc] = useState("");
  const [imageFile, setImageFile] = useState<File>();
  const { value: loading, setValue: setLoading } = useBoolean(false);
  const { toggle } = useBoolean(false);

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

  const mutationFn = (data: Object) => {
    return request({ method: "PUT", data, url: api.updateUserProfile });
  };

  const mutation = useMutation({
    mutationFn: (data: Object) => mutationFn(data),
    onMutate() {
      setLoading(true);
    },
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

  const changeInputFile: ChangeEventHandler<HTMLInputElement> = (e) => {
    const target = e.target as HTMLInputElement;
    const file = target.files?.item(0) as File;
    setValue("image", file?.name, { shouldDirty: true, shouldValidate: true });
    setImageFile(file);
    const src = URL.createObjectURL(file);
    setImageSrc(src);
  };

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
    values: { full_name: "", student_number: "", image: "" },
    resolver: zodResolver(validation),
  });

  const onSubmit: SubmitHandler<UserEditFormValues> = (data) => {
    console.log("ok");
    if (loading) return;
    mutation.mutate(data);
  };
  useEffect(() => {
    const apiData = data?.data;
    if (apiData) {
      setValue("full_name", apiData.full_name, { shouldDirty: true });
      setValue("student_number", apiData.student_number, { shouldDirty: true });
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
    changeInputFile,
    imageSrc,
  };
};
export default useUser;
