import { AxiosError } from "axios";
import createToast from "../toast/toast";

const ErrorHandler = (error: AxiosError | unknown, path: string) => {
  const axiosErr = error as AxiosError;
  console.log(error);
  if (axiosErr.code === "ERR_BAD_REQUEST") {
    switch (axiosErr.response?.data) {
      case "user does not exist":
        createToast({ title: "اطلاعات ورود نادرست میباشد", icon: "error" });
        return;
    }
    console.log(axiosErr.response?.data);
  }
  // network errors
  // server errors
  // custom errors
};
export default ErrorHandler;
