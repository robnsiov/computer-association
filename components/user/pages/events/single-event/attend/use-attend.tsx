import { api } from "@/constants/api";
import useUserStore from "@/context/user/user-store";
import request from "@/utils/axios/axios";
import ErrorHandler from "@/utils/error-handler/error-handler";
import createToast from "@/utils/toast/toast";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";

const useAttend = () => {
  const router = useRouter();

  const [participateLoading, setParticipateLoading] = useState(false);
  const [userStatus] = useUserStore((state) => [state.status]);

  const participateMutationFn = (id: number) => {
    return request({
      method: "GET",
      url: `${api.eventRegister}${id}/`,
    });
  };

  const participateMutation = useMutation({
    mutationFn: (id: number) => participateMutationFn(id),
    onMutate(id: number) {
      setParticipateLoading(true);
    },
    onSettled() {
      setParticipateLoading(false);
    },
    onSuccess() {
      createToast({ icon: "success", title: "ثبت نام موفقیت آمیز بود" });
    },

    onError(error) {
      ErrorHandler(error, "/attend-events");
    },
  });

  const participateOnEvent = (id: number) => {
    if (userStatus !== "AUTHENTICATED") {
      createToast({
        icon: "warning",
        text: "برای ثبت نام در رویداد ابتدا وارد حساب کاربری شوید",
      });
      router.push(`/user/signin?return=/events`);
      return;
    }
    if (!participateLoading) participateMutation.mutate(id);
  };
  return { participateLoading, participateOnEvent };
};

export default useAttend;
