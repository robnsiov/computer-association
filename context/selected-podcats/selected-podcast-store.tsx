import { create } from "zustand";
import SelectedPodcastStore from "./types";

const useSelectedPodcastStore = create<SelectedPodcastStore>()((setState) => ({
  podcast: {},
  setPodcast: (pod) => {
    setState({ podcast: pod });
  },
}));

export default useSelectedPodcastStore;
