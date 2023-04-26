import usePageLoadingStore from "@/context/page-loading-store";
import { usePathname } from "next/navigation";
import { UseLinkImpl } from "./types";

const useLink = ({ href }: UseLinkImpl) => {
  const [set, pathname] = usePageLoadingStore((state) => [
    state.set,
    state.pathname,
  ]);

  const onClick = () => {
    if (href === pathname) return;
    set(true);
  };
  return { onClick };
};

export default useLink;
