import useUserStore from "@/context/user/user-store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const useLagout = () => {
  const router = useRouter();
  const [manualSetStatus] = useUserStore((state) => [state.manualSetStatus]);
  useEffect(() => {
    manualSetStatus("UNKNOWW");
    localStorage.removeItem("token");
    router.replace("/");
  }, []);
  return {};
};
export default useLagout;
