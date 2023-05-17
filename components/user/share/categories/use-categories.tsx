import useActiveCategoryStore from "@/context/active-category/active-category-store";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { CatsImpl } from "./types";
import { useMutation } from "@tanstack/react-query";
import request from "@/utils/axios/axios";
import useMenuStatusStore from "@/context/menu-status/menu-status-store";

const useCategories = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");
  const availabelPathnames = [{ path: "/blogs", query: "/blog" }];

  const [setOpenMenu] = useMenuStatusStore((state) => [state.set]);
  const [setActiveCat] = useActiveCategoryStore((state) => [state.set]);
  const [cats, setCats] = useState<CatsImpl>([]);

  const mutationFn = (url: string) => {
    return request<CatsImpl>({ method: "GET", url });
  };

  const mutation = useMutation({
    mutationFn: (url: string) => mutationFn(url),
    onSuccess({ data }) {
      setCats(data);
    },
    onError() {
      setCats([
        { title: "ورزش", englishTitle: "sport" },
        { title: "شبکه", englishTitle: "network" },
      ]);
      // setCats([]);
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

  return { categoryParam, onClick, cats, setOpenMenu };
};
export default useCategories;
