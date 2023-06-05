import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import request from "@/utils/axios/axios";
import usePageLoadingStore from "@/context/page-loading/page-loading-store";
import { EventsImpl } from "./types";
import createToast from "@/utils/toast/toast";
import ErrorHandler from "@/utils/error-handler/error-handler";
import { api } from "@/constants/api";
import useUserStore from "@/context/user/user-store";
import { useRouter } from "next/navigation";

const useEvents = () => {
  const router = useRouter();

  const [events, setEvents] = useState<EventsImpl>([]);
  const [participateLoading, setParticipateLoading] = useState(-1);

  const [setPageLoading] = usePageLoadingStore((state) => [state.set]);
  const [initEvents, setInitEvents] = useState(true);

  const [userStatus] = useUserStore((state) => [state.status]);

  const eventsMutationFn = () => {
    return request<EventsImpl>({
      method: "GET",
      url: api.events,
    });
  };

  const eventsMutation = useMutation({
    mutationFn: eventsMutationFn,
    onMutate() {
      setInitEvents(false);
      setPageLoading(true);
    },
    onSettled() {
      setPageLoading(false);
    },
    onSuccess({ data }) {
      setEvents(data);
    },

    onError() {
      setEvents([]);
    },
  });

  const participateMutationFn = (id: number) => {
    return request({
      method: "GET",
      url: `${api.eventRegister}${id}/`,
    });
  };

  const participateMutation = useMutation({
    mutationFn: (id: number) => participateMutationFn(id),
    onMutate(id: number) {
      setParticipateLoading(id);
    },
    onSettled() {
      setParticipateLoading(-1);
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
    if (participateLoading === -1) participateMutation.mutate(id);
  };

  useEffect(() => {
    eventsMutation.mutate();
  }, []);
  return { events, initEvents, participateOnEvent, participateLoading };
};
export default useEvents;
