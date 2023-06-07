import usePageLoadingStore from "@/context/page-loading/page-loading-store";
import { usePathname } from "next/navigation";
import { UseLinkImpl } from "./types";
import usePageAnimStore from "@/context/page-anim/page-anim-store";

const useLink = ({ href }: UseLinkImpl) => {
  const [set, pathname] = usePageLoadingStore((state) => [
    state.set,
    state.pathname,
  ]);

  const [setAnim] = usePageAnimStore((state) => [state.set]);

  const doAnim = () => {
    if (href === pathname) return;
    setAnim(true);
  };
  const onClick = () => {
    doAnim();
    if (href === pathname) return;
    set(true);
  };
  return { onClick };
};

export default useLink;
