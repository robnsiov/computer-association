import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChangeEventHandler, useEffect, useMemo, useState } from "react";
import zod from "@/constants/zod-messages";
import { BlogFormValues, Category } from "./types";
import ErrorHandler from "@/utils/error-handler/error-handler";
import createToast from "@/utils/toast/toast";
import { useBoolean } from "usehooks-ts";
import request from "@/utils/axios/axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";
import { api } from "@/constants/api";
import { qu } from "@/components/share/container/query-client/query-client";
import BlogCardImpl from "@/components/user/share/cards/blog/types";

const useWriteBlog = (getTextareaContent: Function) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const edit = searchParams.get("edit");
  const [imageFile, setImageFile] = useState<File>();
  const [imageSrc, setImageSrc] = useState("");
  const { value: editPage, setValue: setEditPage } = useBoolean(false);
  const { value: formLoading, setValue: setFormLoading } = useBoolean(false);

  const validation = useMemo(() => {
    return zod.object({
      title: zod.string().min(2).max(64),
      image: zod.string().min(1, "انتخاب تصویر الزامی میباشد").max(999999),
      catName: zod.string().min(1, "انتخاب دسته بندی الزامی میباشد").max(80),
      enTitle: zod
        .string()
        .min(4)
        .max(40)
        .refine(
          (value) => /^[A-Za-z][A-Za-z0-9 ]*$/.test(value),
          "کارکترهای مجاز : انگلیسی"
        ),
    });
  }, []);

  const queryFn = () => {
    return request<Array<Category>>({
      method: "GET",
      url: api.categories,
    });
  };

  const { data: categories } = useQuery({
    queryFn,
    queryKey: ["categories"],
  });

  const queryUserBlogFn = () => {
    const blog = qu.getQueryData(["user-blog"]) as BlogCardImpl;
    return request({
      method: "GET",
      url: `${api.singleBlog}${blog.slug}/`,
    });
  };

  const { data } = useQuery({
    queryFn: queryUserBlogFn,
    queryKey: ["user-blog-edit"],
    enabled: editPage,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm<BlogFormValues>({
    values: {
      title: "",
      image: "",
      catName: "",
      category: -1,
      enTitle: "",
    },
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

      url: edit ? "" : api.createBlog,
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
      ErrorHandler(error, "/blog-write");
    },
  });

  useEffect(() => {
    const blog = qu.getQueryData(["user-blog"]) as BlogCardImpl | undefined;
    if (blog && edit) {
      setEditPage(true);
    }
  }, []);

  const onSubmit: SubmitHandler<BlogFormValues> = (data) => {
    const formData = new FormData();
    const catSlug = categories?.data.filter(
      ({ name }) => name === data.catName
    );
    const content = getTextareaContent();
    if (imageFile) formData.append("image", imageFile);
    if (data.enTitle) formData.append("en_title", data.enTitle);
    if (data.catName && catSlug && catSlug[0])
      formData.append("category", `${catSlug[0].id}`);

    if (data.title) formData.append("title", data.title);
    if (content) formData.append("content", content);
    formMutation.mutate({ data: formData, edit: false });
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
    categories,
  };
};
export default useWriteBlog;
