import { create } from "zustand";
import PageLoadingStore from "./types";
import UserStore from "./types";
import request from "@/utils/axios/axios";
import { api } from "@/constants/api";

const useUserStore = create<UserStore>()((setState) => ({
  status: "UNKNOWW",
  setStatus: async () => {
    setTimeout(() => {
      setState((state) => ({ ...state, status: "ANONYMOUS" }));
    }, 5000);
    // const { data } = await request({
    //   url: api.tokenRevalidate,
    //   method: "POST",
    // });
    // console.log(data);
  },
}));

export default useUserStore;
