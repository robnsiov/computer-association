import Swal, { SweetAlertOptions } from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const swl = withReactContent(Swal);

const createToast = (options: SweetAlertOptions) => {
  const className = {
    popup: "alert",
    title: "alert__title",
    timerProgressBar: "alert__progress",
    icon: "alert__icon",
  };
  if (options.icon === "error") {
    className.popup += " alert--err";
    className.icon = "alert__icon--err";
    className.timerProgressBar = "";
  }
  const Toast = swl.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    customClass: {
      // global styles
      ...className,
    },
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });
  Toast.fire(options);
};

export default createToast;
