import Swal, { SweetAlertOptions } from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const swl = withReactContent(Swal);

const createToast = (options: SweetAlertOptions) => {
  const Toast = swl.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });
  Toast.fire(options);
};

export default createToast;
