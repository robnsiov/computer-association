import { create } from "zustand";
import PageLoadingStore from "./types";

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
