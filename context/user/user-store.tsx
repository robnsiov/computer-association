import { create } from "zustand";
import PageLoadingStore from "./types";
import UserStore from "./types";
import request from "@/utils/axios/axios";
import { api } from "@/constants/api";

const useUserStore = create<UserStore>()((setState) => ({
  status: "UNKNOWW",
  setStatus: async () => {
    try {
      await request({
        url: api.tokenValidation,
        method: "GET",
      });
      setState((state) => ({ ...state, status: "AUTHENTICATED" }));
    } catch {
      setState((state) => ({ ...state, status: "ANONYMOUS" }));
    }
  },
  manualSetStatus: (status) => setState({ status }),
}));

export default useUserStore;
