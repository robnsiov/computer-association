import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChangeEventHandler, useMemo, useState } from "react";
import zod from "@/constants/zod-messages";
import { BlogFormValues } from "./types";
import ErrorHandler from "@/utils/error-handler/error-handler";
import createToast from "@/utils/toast/toast";
import { useBoolean } from "usehooks-ts";
import request from "@/utils/axios/axios";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const useWriteBlog = () => {
  const router = useRouter();
  const [imageFile, setImageFile] = useState<File>();
  const [imageSrc, setImageSrc] = useState("");
  const { value: formLoading, setValue: setFormLoading } = useBoolean(false);

  const validation = useMemo(() => {
    return zod.object({
      title: zod.string().min(2).max(64),
      shortDesc: zod.string().min(2).max(64),
      image: zod.string().min(1, "انتخاب تصویر الزامی میباشد").max(999999),
      catName: zod.string().min(1, "انتخاب دسته بندی الزامی میباشد").max(80),
    });
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm<BlogFormValues>({
    values: { title: "", shortDesc: "", image: "", catName: "", category: -1 },
    resolver: zodResolver(validation),
  });
  const changeInputFile: ChangeEventHandler<HTMLInputElement> = (e) => {
    const target = e.target as HTMLInputElement;
    const file = target.files?.item(0) as File;
    setValue("image", file?.name, { shouldDirty: true, shouldValidate: true });
    setImageFile(file);
    const src = URL.createObjectURL(file);
    setImageSrc(src);
  };

  const setFormCategory = (catName: string, category: number) => {
    setValue("catName", catName, { shouldDirty: true, shouldValidate: true });
    setValue("category", category, { shouldDirty: true, shouldValidate: true });
  };

  const formMutationFn = (data: Object, edit: boolean) => {
    return request({
      method: "POST",
      data,

      url: `/events-api/test`,
    });
  };

  const formMutation = useMutation({
    mutationFn: ({ data, edit }: { data: Object; edit: boolean }) =>
      formMutationFn(data, edit),
    onMutate() {
      setFormLoading(true);
    },
    onSettled() {
      setFormLoading(false);
    },
    onSuccess() {
      createToast({
        icon: "success",
        title: " مقاله شما پس از تایید توسط مدیر نمایش داده خواهد شد",
      });
      router.replace("/user/blogs");
    },

    onError(error) {
      ErrorHandler(error, "/blogs-add");
    },
  });

  const onSubmit: SubmitHandler<BlogFormValues> = (data) => {
    formMutation.mutate({ data, edit: false });
  };

  return {
    onSubmit: handleSubmit(onSubmit),
    register,
    errors,
    changeInputFile,
    imageSrc,
    setFormCategory,
    getValues,
    formLoading,
  };
};
export default useWriteBlog;
