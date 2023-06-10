import useUserStore from "@/context/user/user-store";
import createToast from "@/utils/toast/toast";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const useLagout = () => {
  const router = useRouter();
  const [manualSetStatus] = useUserStore((state) => [state.manualSetStatus]);
  useEffect(() => {
    createToast({ title: "از حساب کاربری خارج شدید", icon: "success" });
    manualSetStatus("UNKNOWW");
    localStorage.removeItem("token");
    router.replace("/");
  }, []);
  return {};
};
export default useLagout;
