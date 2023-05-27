import { create } from "zustand";
import PageLoadingStore from "./types";
import UserStore from "./types";
import request from "@/utils/axios/axios";

const useUserStore = create<UserStore>()((setState) => ({
  status: "UNKNOWW",
  setStatus: async () => {
    setState((state) => ({ ...state, status: "ANONYMOUS" }));
    // request({ url: "" });
  },
}));

useUserStore.getState().setStatus();

export default useUserStore;
