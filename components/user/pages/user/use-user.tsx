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

  const { isLoading, data, refetch } = useQuery({
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
      refetch();
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
      full_name: zod.string().min(2).max(64),
      student_number: zod.string().min(4).max(18),
    });
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<UserEditFormValues>({
    values: { full_name: "", student_number: "" },
    resolver: zodResolver(validation),
  });

  const onSubmit: SubmitHandler<UserEditFormValues> = (data) => {
    if (loading) return;

    const formData = new FormData();
    formData.append("full_name", data.full_name);
    formData.append("student_number", data.student_number);
    if (imageFile) {
      formData.append("image", imageFile);
    }

    mutation.mutate(formData);
  };
  useEffect(() => {
    const apiData = data?.data;
    if (apiData) {
      setValue("full_name", apiData.full_name, {
        shouldDirty: true,
        shouldValidate: true,
      });
      setValue("student_number", apiData.student_number, {
        shouldDirty: true,
        shouldValidate: true,
      });
      setImageSrc(apiData.image as string);
      setValue("image", "..." + apiData.image?.slice(0, 20), {
        shouldDirty: true,
        shouldValidate: true,
      });
      // force update for solve input problems
      toggle();
    }
  }, [data]);
  console.log(errors);
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
