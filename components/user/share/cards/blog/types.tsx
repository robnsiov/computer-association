export interface ExtraBlogCardImpl {
  edit?: boolean;
}

export default interface BlogCardImpl {
  image: string;
  title: string;
  count: number;
  article_category: {
    en_name: string;
    name: string;
    slug: string;
  };
  article_user: {
    full_name: string;
    image?: string;
  };
  slug: string;
}

export interface BlogCard extends BlogCardImpl, ExtraBlogCardImpl {
  changeRouteWithCat(path: string): void;
}
