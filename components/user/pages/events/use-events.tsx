import { useEffect, useState } from "react";
import BlogCardImpl from "../../share/cards/blog/types";
import useActiveCategoryStore from "@/context/active-category/active-category-store";
import { useMutation } from "@tanstack/react-query";
import request from "@/utils/axios/axios";
import { useSearchParams } from "next/navigation";
import usePageLoadingStore from "@/context/page-loading/page-loading-store";
import { EventImpl } from "./types";
import createToast from "@/utils/toast/toast";
import ErrorHandler from "@/utils/error-handler/error-handler";

const useEvents = () => {
  const [events, setEvents] = useState<Array<EventImpl>>([]);
  const [participateLoading, setParticipateLoading] = useState(-1);

  const [setPageLoading] = usePageLoadingStore((state) => [state.set]);
  const [initEvents, setInitEvents] = useState(true);

  const eventsMutationFn = () => {
    return request<Array<EventImpl>>({
      method: "GET",
      // url: `${cat ? `/blogs-api?cat=${cat}` : "/blogs-api"}`,
      url: `http://localhost:5000/events`,
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

  const participateMutationFn = () => {
    return request({
      method: "POST",
      url: `/events-api`,
    });
  };

  const participateMutation = useMutation({
    mutationFn: participateMutationFn,
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
      ErrorHandler(error, "/events");
    },
  });

  const participateOnEvent = (id: number) => {
    if (participateLoading === -1) participateMutation.mutate(id);
  };

  useEffect(() => {
    eventsMutation.mutate();
  }, []);
  return { events, initEvents, participateOnEvent, participateLoading };
};
export default useEvents;
