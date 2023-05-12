import { Podcast } from "@/context/selected-podcats/types";

export default interface PlayerImpl {
  selectedPod: Podcast;
  podcasts: Array<Podcast>;
}
