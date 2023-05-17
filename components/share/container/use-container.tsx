import useMenuStatusStore from "@/context/menu-status/menu-status-store";
import usePageLoadingStore from "@/context/page-loading/page-loading-store";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const useContainer = () => {
  const pathname = usePathname();
  const [set] = usePageLoadingStore((state) => [state.set]);
  const [setOpenMenu] = useMenuStatusStore((state) => [state.set]);

  useEffect(() => {
    set(false, pathname);
    setOpenMenu(false);
  }, [pathname]);

  return;
};

export default useContainer;
