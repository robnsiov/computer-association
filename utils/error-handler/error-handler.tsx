import { AxiosError } from "axios";
import createToast from "../toast/toast";

const ErrorHandler = (error: AxiosError | unknown, path: string) => {
  const axiosErr = error as AxiosError;
  console.log(error);
  if (axiosErr.code === "ERR_BAD_REQUEST") {
    const err = axiosErr.response?.data;
    // login
    if (path === "/login") {
      if (err === "user does not exist") {
        createToast({ title: "اطلاعات ورود نادرست میباشد", icon: "error" });
      }
    }
    // register
    else if (path === "/register") {
      if ("email" in (err as Object)) {
        createToast({
          title: "ایمیل وارد شده قبلا استفاده شده است",
          icon: "error",
        });
      } else if ("student_number" in (err as Object)) {
        createToast({
          title: "شماره دانشجویی وارد شده قبلا استفاده شده است",
          icon: "error",
        });
      }
    }
  }
  // network errors
  // server errors
  // custom errors
};
export default ErrorHandler;
