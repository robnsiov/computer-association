import { api } from "@/constants/api";
import request from "@/utils/axios/axios";
import { Tooltip } from "@mantine/core";
import { useMutation, useQuery } from "@tanstack/react-query";
import { CalendarRemove } from "iconsax-react";
import { UserEventApi } from "./types";
import { useEffect, useState } from "react";
import createToast from "@/utils/toast/toast";
import ErrorHandler from "@/utils/error-handler/error-handler";
import Spinner from "@/components/share/spinner/spinner";

const useUserEvents = () => {
  const [elements, setElements] = useState<Array<UserEventApi>>([]);
  const [lodingEventId, setLoadingEventId] = useState(-1);

  const mutationFn = (id: number) => {
    return request({
      method: "GET",
      url: `${api.eventCanceling}${id}`,
    });
  };

  const queryFn = () => {
    return request<Array<UserEventApi>>({
      method: "GET",
      url: api.userEvents,
    });
  };

  const { data, isSuccess, isLoading, refetch, isFetching } = useQuery({
    queryFn,
    queryKey: ["user-events"],
  });

  const mutation = useMutation({
    mutationFn: (id: number) => mutationFn(id),
    onMutate(id) {
      setLoadingEventId(id);
    },
    onSettled() {
      setLoadingEventId(-1);
    },
    onSuccess() {
      createToast({ title: "انصراف از رویداد انجام شد", icon: "success" });
      refetch();
    },
    onError(error) {
      ErrorHandler(error, "/event-canceling");
    },
  });

  const eventCanceling = (id: number) => {
    if (lodingEventId === -1) mutation.mutate(id);
  };

  const rows = elements.map((element) => (
    <tr key={element.id}>
      <td className="dark:bg-slate-800 dark:text-slate-400">{element.title}</td>
      <td className="dark:bg-slate-800 text-red-400 flex justify-start items-center">
        {element.is_active ? (
          <>
            {lodingEventId === element.id ? (
              <>
                <Spinner color="text-slate-400" />
              </>
            ) : (
              <Tooltip
                className="cursor-pointer"
                onClick={() => eventCanceling(element.id)}
                label="انصراف از رویداد"
                color="#414856"
                position="top"
              >
                <CalendarRemove size="24" />
              </Tooltip>
            )}
          </>
        ) : (
          <>
            <span className="text-sm">این رویداد منقضی شده است</span>
          </>
        )}
      </td>
    </tr>
  ));

  useEffect(() => {
    const apiData = data?.data;
    if (apiData) {
      setElements(apiData);
    }
  }, [data]);
  return { rows, isFetching, isSuccess };
};
export default useUserEvents;
