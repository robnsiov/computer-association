import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChangeEventHandler, useMemo, useState } from "react";
import zod from "@/constants/zod-messages";
import { BlogFormValues } from "./types";

const useWriteBlog = () => {
  const [imageFile, setImageFile] = useState<File>();
  const [imageSrc, setImageSrc] = useState("");

  const validation = useMemo(() => {
    return zod.object({
      title: zod.string().min(2).max(64),
      shortDesc: zod.string().min(2).max(64),
      image: zod.string().min(1).max(6000),
      category: zod.number(),
    });
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<BlogFormValues>({
    values: { title: "", shortDesc: "", image: "" },
    resolver: zodResolver(validation),
  });
  const onSubmit: SubmitHandler<BlogFormValues> = (data) => {};
  const changeInputFile: ChangeEventHandler<HTMLInputElement> = (e) => {
    const target = e.target as HTMLInputElement;
    const file = target.files?.item(0) as File;
    setValue("image", file?.name, { shouldDirty: true });
    setImageFile(file);
    const src = URL.createObjectURL(file);
    setImageSrc(src);
  };
  return {
    onSubmit: handleSubmit(onSubmit),
    register,
    errors,
    changeInputFile,
    imageSrc,
  };
};
export default useWriteBlog;
