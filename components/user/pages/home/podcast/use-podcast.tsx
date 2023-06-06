import { api } from "@/constants/api";
import { Podcast } from "@/context/selected-podcats/types";
import request from "@/utils/axios/axios";
import createToast from "@/utils/toast/toast";
import { useQuery } from "@tanstack/react-query";

const usePodcast = () => {
  const queryFn = () => {
    return request<Array<Podcast>>({
      method: "GET",
      url: api.homePodcast,
    });
  };

  const { data, isSuccess } = useQuery({
    queryFn,
    queryKey: ["home-podcasts"],
    retry: 3,
  });
  const add = () => {
    createToast({ title: "عالی بود", icon: "success" });
  };
  return { data: data?.data[0], isSuccess, add };
};
export default usePodcast;
