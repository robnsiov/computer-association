import { create } from "zustand";
import PageLoadingStore from "./types";
import UserStore from "./types";
import request from "@/utils/axios/axios";
import { api } from "@/constants/api";

const useUserStore = create<UserStore>()((setState) => ({
  status: "UNKNOWW",
  setStatus: async () => {
    setState((state) => ({ ...state, status: "AUTHENTICATED" }));
    // try {
    //   await request({
    //     url: api.tokenValidation,
    //     method: "GET",
    //   });
    //   setState((state) => ({ ...state, status: "AUTHENTICATED" }));
    // } catch {
    //   setState((state) => ({ ...state, status: "ANONYMOUS" }));
    // }
  },
}));

export default useUserStore;
