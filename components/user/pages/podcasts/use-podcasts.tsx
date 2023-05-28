import { api } from "@/constants/api";
import usePageLoadingStore from "@/context/page-loading/page-loading-store";
import useSelectedPodcastStore from "@/context/selected-podcats/selected-podcast-store";
import { Podcast } from "@/context/selected-podcats/types";
import request from "@/utils/axios/axios";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useBoolean } from "usehooks-ts";

const usePodcasts = () => {
  const searchParams = useSearchParams();
  const idParam = searchParams.get("id");

  const { value: played, setValue: setPlayed } = useBoolean(false);
  const { value: showModal, toggle: toggleShowModal } = useBoolean(false);
  const [setPodcast, podcast] = useSelectedPodcastStore((state) => [
    state.setPodcast,
    state.podcast,
  ]);
  const pod = podcast as Podcast;

  const [setPageLoading] = usePageLoadingStore((state) => [state.set]);

  const queryFn = () => {
    return request<Array<Podcast>>({
      method: "GET",
      url: api.podcasts,
    });
  };

  const { data, isSuccess, isError, isLoading, isFetching } = useQuery({
    queryFn,
    queryKey: ["podcasts"],
  });

  useEffect(() => {
    if (isFetching) {
      setPageLoading(true);
    } else {
      setPageLoading(false);
    }
  }, [isFetching]);

  useEffect(() => {
    const firstPod = data?.data[0];
    if (typeof idParam === "string") {
      const pod = data?.data.find(({ id }) => id === +idParam);
      if (pod) setPodcast(pod);
    } else if (firstPod) {
      setPodcast(firstPod);
    }
  }, [data]);

  return {
    data,
    isSuccess,
    podcast: pod,
    isError,
    isLoading,
    played,
    setPlayed,
    toggleShowModal,
    showModal,
  };
};
export default usePodcasts;
