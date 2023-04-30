import Axios, { AxiosRequestConfig } from "axios";

const request = (config: AxiosRequestConfig) => {
  const axs = Axios(config);
  return axs;
};
export default request;
