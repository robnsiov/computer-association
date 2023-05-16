export interface ExtraBlogCardImpl {
  edit?: boolean;
}

export default interface BlogCardImpl {
  category: string;
  categoryLink: string;
  author: string;
  authorImage: string;
  image: string;
  title: string;
  href: string;
  view: number;
  id?: number;
}

export interface BlogCard extends BlogCardImpl, ExtraBlogCardImpl {}
