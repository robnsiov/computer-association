import { api } from "@/constants/api";
import Axios, { AxiosRequestConfig } from "axios";

function request<T>(config: AxiosRequestConfig) {
  let token = "";
  if (typeof window !== "undefined") {
    const tk = localStorage.getItem("token");
    if (tk) token = tk;
  }
  if (token) Axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  const axs = Axios<T>({
    baseURL: api.baseURL,
    ...config,
  });

  return axs;
}
export default request;
