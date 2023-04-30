import usePageLoadingStore from "@/context/page-loading/page-loading-store";

const usePageLoader = () => {
  const [loading] = usePageLoadingStore((state) => [state.loading]);
  return { loading };
};

export default usePageLoader;
