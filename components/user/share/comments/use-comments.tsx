import zod from "@/constants/zod-messages";
import { useMemo } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import CommentsImpl, { CommentsFormValues, CommentsRequest } from "./types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useBoolean } from "usehooks-ts";
import request from "@/utils/axios/axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import createToast from "@/utils/toast/toast";
import ErrorHandler from "@/utils/error-handler/error-handler";
import { api } from "@/constants/api";

const useComments = ({ type, slug, onConfirm }: CommentsImpl) => {
  const { value: showCommentForm, toggle: toggleShowCommentForm } =
    useBoolean(false);
  const { value: formLoading, setValue: setFormLoading } = useBoolean(false);
  const validation = useMemo(() => {
    return zod.object({
      name: zod.string().min(3).max(80),
      body: zod.string().min(4).max(740),
    });
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CommentsFormValues>({
    values: { body: "", name: "" },
    resolver: zodResolver(validation),
  });

  const getCommnetType = () => {
    let commentType = "";
    switch (type) {
      case "ARTICLE":
        commentType = "article";
        break;
      case "PODCAST":
        commentType = "podcast";
        break;
    }
    return commentType;
  };

  const queryFn = () => {
    const commentType = getCommnetType();
    return request<Array<CommentsRequest>>({
      method: "GET",
      url: `${api.comments}${commentType}/${slug}`,
    });
  };

  const { data, isLoading } = useQuery({
    queryFn,
    queryKey: ["comments"],
  });

  const mutationFn = (data: Object) => {
    const commentType = getCommnetType();
    return request({
      method: "POST",
      data,
      url: `${api.addComment}${commentType}/${slug}/`,
    });
  };

  const mutation = useMutation({
    mutationFn: (data: Object) => mutationFn(data),
    onMutate() {
      setFormLoading(true);
    },
    onSettled() {
      setFormLoading(false);
    },
    onSuccess() {
      onConfirm();
      createToast({
        title: "نظر شما بعد از تایید , نمایش داده خواهد شد",
        icon: "success",
      });
      reset();
      toggleShowCommentForm();
    },
    onError(error) {
      ErrorHandler(error, "/add-comment");
    },
  });

  const onSubmit: SubmitHandler<CommentsFormValues> = ({ body, name }) => {
    if (!formLoading) {
      mutation.mutate({ name: name, content: body });
    }
  };

  return {
    register,
    onSubmit: handleSubmit(onSubmit),
    errors,
    showCommentForm,
    toggleShowCommentForm,
    data,
    isLoading,
    formLoading,
  };
};

export default useComments;
