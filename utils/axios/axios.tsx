import { api } from "@/constants/api";
import Axios, { AxiosRequestConfig } from "axios";

function request<T>(config: AxiosRequestConfig) {
  const axs = Axios<T>({
    baseURL: api.baseURL,
    ...config,
  });
  return axs;
}
export default request;
