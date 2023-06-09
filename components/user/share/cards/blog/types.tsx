export interface ExtraBlogCardImpl {
  edit?: boolean;
}

export default interface BlogCardImpl {
  image: string;
  title: string;
  name?: string;
  count: number;
  article_category?: {
    en_name: string;
    name: string;
    slug: string;
  };
  article_user?: {
    full_name: string;
    image?: string;
  };
  slug: string;
  // publish / draft / trash
  status?: "p" | "d" | "t";
  video_file?: string;
}

export interface BlogCard extends BlogCardImpl, ExtraBlogCardImpl {
  changeRouteWithCat(path: string): void;
  editOperation?(blog: BlogCard): void;
  videos?: boolean;
  onView?(src: string): void;
}
