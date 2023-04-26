import { create } from "zustand";

interface PageLoadingStore {
  loading: boolean;
  pathname?: string;
  set: (loading: boolean, pathname?: string) => void;
}

const usePageLoadingStore = create<PageLoadingStore>()((setState) => ({
  loading: false,
  pathname: "",
  set: (loading, pathname) =>
    setState((state) => ({
      loading: loading,
      pathname: pathname ?? state.pathname,
    })),
}));

export default usePageLoadingStore;
