import { useEffect, useState } from "react";
import BlogCardImpl from "../../share/cards/blog/types";
import useActiveCategoryStore from "@/context/active-category/active-category-store";
import { useMutation } from "@tanstack/react-query";
import request from "@/utils/axios/axios";
import { useSearchParams } from "next/navigation";
import usePageLoadingStore from "@/context/page-loading/page-loading-store";
import BlogsImpl from "./types";
import { api } from "@/constants/api";

const useBlogs = ({ edit, home }: BlogsImpl) => {
  const [blogs, setBlogs] = useState<Array<BlogCardImpl>>([]);

  const [cat] = useActiveCategoryStore((state) => [state.cat]);
  const [setPageLoading] = usePageLoadingStore((state) => [state.set]);
  const [initBlogs, setInitBlogs] = useState(true);

  const searchParams = useSearchParams();
  const categoryPathname = searchParams.get("category");

  const mutationFn = (cat: string | null) => {
    let url = api.blogs;
    if (cat && cat !== "all") url = api.blogsByCategory(cat);
    if (home) url = api.homeBlogs;
    if (edit) url = api.userBlogs;

    return request<Array<BlogCardImpl>>({
      method: "GET",
      url,
    });
  };

  const mutation = useMutation({
    mutationFn: (url: string | null) => mutationFn(url),
    onMutate() {
      setInitBlogs(false);
      setPageLoading(true);
    },
    onSettled() {
      setPageLoading(false);
    },
    onSuccess({ data }) {
      setBlogs(data);
    },

    onError() {
      setBlogs([]);
    },
  });

  useEffect(() => {
    if (cat) mutation.mutate(cat);
  }, [cat]);
  useEffect(() => {
    if (!categoryPathname) mutation.mutate(null);
  }, [categoryPathname]);

  return { blogs, initBlogs };
};
export default useBlogs;
