import usePageLoadingStore from "@/context/page-loading-store";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const useContainer = () => {
  const pathname = usePathname();
  const [set] = usePageLoadingStore((state) => [state.set]);

  useEffect(() => {
    set(false, pathname);
  }, [pathname]);

  return;
};

export default useContainer;
