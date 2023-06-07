import { create } from "zustand";
import PageAnimStore from "./types";

const usePageAnimStore = create<PageAnimStore>()((setState) => ({
  loading: false,
  set: (loading) =>
    setState(() => ({
      loading,
    })),
}));

export default usePageAnimStore;
