import { create } from "zustand";
import PageLoadingStore from "./types";
import UserStore from "./types";

const useUserStore = create<UserStore>()((setState) => ({
  status: "UNKNOWW",
  setStatus: async () => {
    setTimeout(() => {
      setState((state) => ({ ...state, status: "ANONYMOUS" }));
    }, 2000);
  },
}));

useUserStore.getState().setStatus();

export default useUserStore;
