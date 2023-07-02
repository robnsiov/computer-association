import useMenuStatusStore from "@/context/menu-status/menu-status-store";
import usePageAnimStore from "@/context/page-anim/page-anim-store";
import usePageLoadingStore from "@/context/page-loading/page-loading-store";
import useUserStore from "@/context/user/user-store";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useState } from "react";

const useContainer = () => {
  const pathname = usePathname();
  const [set, pageLoading] = usePageLoadingStore((state) => [
    state.set,
    state.loading,
  ]);

  const [pageAnim, setPageAnim] = usePageAnimStore((state) => [
    state.loading,
    state.set,
  ]);

  const [setOpenMenu] = useMenuStatusStore((state) => [state.set]);
  const [setUserStatus] = useUserStore((state) => [state.setStatus]);

  const setTheme = () => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  };

  useLayoutEffect(() => {
    setTheme();
  }, []);

  useEffect(() => {
    setUserStatus();
  }, []);

  useEffect(() => {
    set(false, pathname);
    setOpenMenu(false);
  }, [pathname]);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    timer = setTimeout(() => {
      setPageAnim(false);
    }, 100);

    () => {
      clearTimeout(timer);
    };
  }, [pathname]);

  return { pageLoading: pageAnim };
};

export default useContainer;
