export interface Podcast {
  image: string;
  title: string;
  id: number;
  description: string;
  speaker: string;
  data_collector: string;
  text_editor: string;
  sound_editor: string;
  graphic_designer: string;
  sound: string;
  slug: string;
}

export default interface SelectedPodcastStore {
  podcast: Podcast | {};
  setPodcast: (pod: Podcast) => void;
}
