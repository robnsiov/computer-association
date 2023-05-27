import { create } from "zustand";
import PageLoadingStore from "./types";
import UserStore from "./types";
import request from "@/utils/axios/axios";

const useUserStore = create<UserStore>()((setState) => ({
  status: "UNKNOWW",
  setStatus: async () => {
    setTimeout(() => {
      setState((state) => ({ ...state, status: "ANONYMOUS" }));
    }, 5000);
    // request({ url: "" });
  },
}));

useUserStore.getState().setStatus();

export default useUserStore;
