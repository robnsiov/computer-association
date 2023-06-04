export default interface SingleBlogImpl {
  slug: string;
}
export interface SingleBlogApi {
  title: string;
  id: number;
  en_title: string;
  slug: string;
  image: string;
  content: string;
  date: string;
  is_active: boolean;
  time: string;
  place: string;
  provider: string;
}
