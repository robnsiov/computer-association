import useUserStore from "@/context/user/user-store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const useProtected = () => {
  const router = useRouter();
  const [userStatus] = useUserStore((state) => [state.status]);

  useEffect(() => {
    router.replace("/user/signin");
  }, [userStatus]);

  return { userStatus };
};
export default useProtected;
