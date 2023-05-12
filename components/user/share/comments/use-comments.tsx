import zod from "@/constants/zod-messages";
import { useMemo } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { CommentsFormValues, CommentsRequest } from "./types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useBoolean } from "usehooks-ts";
import request from "@/utils/axios/axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import createToast from "@/utils/toast/toast";
import ErrorHandler from "@/utils/error-handler/error-handler";

const useComments = () => {
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

  const queryFn = () => {
    return request<Array<CommentsRequest>>({
      method: "GET",
      url: "http://localhost:5000/cms",
    });
  };

  const { data, isLoading } = useQuery({
    queryFn,
    queryKey: ["comments"],
  });

  const mutationFn = (data: Object) => {
    return request({ method: "POST", data, url: "/add-comment" });
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

  const onSubmit: SubmitHandler<CommentsFormValues> = (data) => {
    if (!formLoading) {
      mutation.mutate(data);
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
