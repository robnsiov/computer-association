import useSelectedPodcastStore from "@/context/selected-podcats/selected-podcast-store";
import { Podcast } from "@/context/selected-podcats/types";
import request from "@/utils/axios/axios";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

const usePodcasts = () => {
  const searchParams = useSearchParams();
  const idParam = searchParams.get("id");

  const [setPodcast, podcast] = useSelectedPodcastStore((state) => [
    state.setPodcast,
    state.podcast,
  ]);
  const pod = podcast as Podcast;

  const queryFn = () => {
    return request<Array<Podcast>>({
      method: "GET",
      url: "http://localhost:5000/pods",
    });
  };

  const { data, isSuccess, isError, isLoading } = useQuery({
    queryFn,
    queryKey: ["podcasts"],
  });

  useEffect(() => {
    const firstPod = data?.data[0];
    if (typeof idParam === "string") {
      const pod = data?.data.find(({ id }) => id === +idParam);
      if (pod) setPodcast(pod);
    } else if (firstPod) {
      console.log(firstPod);
      setPodcast(firstPod);
    }
  }, [data]);

  return { data, isSuccess, podcast: pod, isError, isLoading };
};
export default usePodcasts;
