import useActiveCategoryStore from "@/context/active-category/active-category-store";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { CatsImpl } from "./types";
import { useMutation } from "@tanstack/react-query";
import request from "@/utils/axios/axios";
import useMenuStatusStore from "@/context/menu-status/menu-status-store";
import { api } from "@/constants/api";

const useCategories = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category") ?? "all";
  const availabelPathnames = [
    { path: "/blogs", query: api.categories },
    { path: "/videos", query: api.categories },
  ];

  const [setOpenMenu] = useMenuStatusStore((state) => [state.set]);
  const [setActiveCat] = useActiveCategoryStore((state) => [state.set]);
  const [cats, setCats] = useState<CatsImpl>([]);

  const mutationFn = (url: string) => {
    return request<CatsImpl>({ method: "GET", url });
  };

  const mutation = useMutation({
    mutationFn: (url: string) => mutationFn(url),
    onSuccess({ data }) {
      console.log(data);
      setCats(data);
    },
    onError() {
      setCats([]);
    },
  });

  useEffect(() => {
    const path = availabelPathnames.find(({ path }) => path === pathname);
    if (path) {
      mutation.mutate(path.query);
    } else {
      setCats([]);
    }
  }, [pathname]);

  const onClick = (path: string) => {
    setActiveCat(path);
    router.push(`${pathname}?category=${path}`);
  };

  useEffect(() => {
    if (categoryParam) setActiveCat(categoryParam);
  }, []);

  return {
    categoryParam,
    onClick,
    cats,
    setOpenMenu,
    showCategories: availabelPathnames.find(({ path }) => path === pathname),
  };
};
export default useCategories;
