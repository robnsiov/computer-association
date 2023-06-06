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
    // change-pass
    else if (path === "/change-pass") {
      if (err === "code is not correct") {
        createToast({ title: "کد اعتبارسنجی نادرست میباشد", icon: "error" });
      }
    }
    // attend-events
    else if (path === "/attend-events") {
      if (err === "You have registered for the event") {
        createToast({
          title: "قبلا در این رویداد ثبت نام کرده اید",
          icon: "error",
        });
      }
    }
    // blog-write
    else if (path === "/blog-write") {
      if ("en_title" in (err as Object)) {
        createToast({
          title: "عنوان انگلیسی وارد شده قبلا توسط کاربر دیگری استفاده شده است",
          icon: "error",
        });
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
    } else {
      createToast({
        title: "خطای غیر منتظره ای رخ داده است",
        icon: "error",
      });
    }
  }
  // network errors
  else if (axiosErr.code === "ERR_NETWORK") {
    createToast({
      title: "ارتباط با سرور برقرار نشد",
      icon: "error",
    });
  }
  // bad response
  else if (axiosErr.code === "ERR_BAD_RESPONSE") {
    createToast({
      title: "درخواست موفقیت آمیز نبود",
      icon: "error",
    });
  }
};
export default ErrorHandler;
