import Axios, { AxiosRequestConfig } from "axios";

function request<T>(config: AxiosRequestConfig) {
  const axs = Axios<T>(config);
  return axs;
}
export default request;
