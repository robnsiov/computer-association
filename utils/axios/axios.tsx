import { api } from "@/constants/api";
import Axios, { AxiosRequestConfig } from "axios";

function request<T>(config: AxiosRequestConfig) {
  // let token = "";
  // if (typeof window !== "undefined")
  //   token = localStorage.getItem("token") as string;
  // Axios.defaults.headers.common["Authorization"] = `Bearer ${""}`;
  const axs = Axios<T>({
    baseURL: api.baseURL,
    ...config,
  });

  return axs;
}
export default request;
