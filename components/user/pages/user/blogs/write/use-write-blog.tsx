import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChangeEventHandler, useEffect, useMemo, useState } from "react";
import zod from "@/constants/zod-messages";
import { BlogFormValues, Category, UserSingleBlog } from "./types";
import ErrorHandler from "@/utils/error-handler/error-handler";
import createToast from "@/utils/toast/toast";
import { useBoolean } from "usehooks-ts";
import request from "@/utils/axios/axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";
import { api } from "@/constants/api";
import { qu } from "@/components/share/container/query-client/query-client";
import BlogCardImpl from "@/components/user/share/cards/blog/types";

const useWriteBlog = (
  getTextareaContent: Function,
  setTextareaContent: (content: string) => {}
) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const edit = searchParams.get("edit");
  const [imageFile, setImageFile] = useState<File>();
  const [imageSrc, setImageSrc] = useState("");
  const { value: editorLoading, setValue: setEditorLoading } = useBoolean(true);
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
  const getArticleSlug = () => {
    const blog = qu.getQueryData(["user-blog"]) as BlogCardImpl;
    return blog.slug;
  };
  const queryUserBlogFn = () => {
    return request<UserSingleBlog>({
      method: "GET",
      url: api.userSingleBlog(getArticleSlug()),
    });
  };

  const { data: userSingleBlog } = useQuery({
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

  useEffect(() => {
    const data = userSingleBlog?.data;
    if (data) {
      setValue("title", data.title, {
        shouldDirty: true,
        shouldValidate: true,
      });
      setValue("enTitle", data.en_title, {
        shouldDirty: true,
        shouldValidate: true,
      });
      const imageSrc = data.image;
      setImageSrc(imageSrc);
      setValue("image", imageSrc, {
        shouldDirty: true,
        shouldValidate: true,
      });
      setValue("category", data.category, {
        shouldDirty: true,
        shouldValidate: true,
      });
      setValue("catName", data.category_name ?? "شبکه", {
        shouldDirty: true,
        shouldValidate: true,
      });
      setTextareaContent(data.content);
      console.log(data.content);
    }
  }, [userSingleBlog]);

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
      method: edit ? "PATCH" : "POST",
      data,

      url: edit ? `${api.updateBlog}${getArticleSlug()}/` : api.createBlog,
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
    console.log(content);
    formMutation.mutate({ data: formData, edit: editPage });
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
    editorLoading,
    setEditorLoading,
  };
};
export default useWriteBlog;
