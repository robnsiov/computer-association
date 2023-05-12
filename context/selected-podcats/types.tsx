export interface Podcast {
  image: string;
  title: string;
  id: number;
  desc: string;
  speaker: string;
  data: string;
  editor: string;
  designer: string;
  src: string;
}

export default interface SelectedPodcastStore {
  podcast: Podcast | {};
  setPodcast: (pod: Podcast) => void;
}
