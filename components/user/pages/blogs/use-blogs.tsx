import { useEffect, useState } from "react";
import BlogCardImpl from "../../share/cards/blog/types";
import useActiveCategoryStore from "@/context/active-category/active-category-store";
import { useMutation } from "@tanstack/react-query";
import request from "@/utils/axios/axios";
import { useSearchParams } from "next/navigation";
import usePageLoadingStore from "@/context/page-loading/page-loading-store";

const useBlogs = () => {
  const [blogs, setBlogs] = useState<Array<BlogCardImpl>>([]);

  const [cat] = useActiveCategoryStore((state) => [state.cat]);
  const [setPageLoading] = usePageLoadingStore((state) => [state.set]);
  const [initBlogs, setInitBlogs] = useState(true);

  const searchParams = useSearchParams();
  const categoryPathname = searchParams.get("category");

  const mutationFn = (cat: string | null) => {
    return request<Array<BlogCardImpl>>({
      method: "GET",
      // url: `${cat ? `/blogs-api?cat=${cat}` : "/blogs-api"}`,
      url: `http://localhost:5000/blogs`,
    });
  };

  const mutation = useMutation({
    mutationFn: (url: string | null) => mutationFn(url),
    onMutate() {
      setInitBlogs(false);
      setPageLoading(true);
    },
    onSuccess({ data }) {
      setPageLoading(false);
      setBlogs(data);
    },

    onError() {
      setPageLoading(false);
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
