import { api } from "@/constants/api";
import request from "@/utils/axios/axios";
import { useQuery } from "@tanstack/react-query";
import { LatestEventApi } from "./types";

const useLatestEvent = () => {
  const queryFn = () => {
    return request<LatestEventApi>({
      method: "GET",
      url: api.latestEvent,
    });
  };

  const { data, isSuccess } = useQuery({
    queryFn,
    queryKey: ["latest-event"],
    retry: 3,
  });
  return { data, isSuccess };
};
export default useLatestEvent;
