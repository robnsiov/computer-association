export interface ExtraBlogCardImpl {
  edit?: boolean;
}

export default interface BlogCardImpl {
  category: string;
  image: string;
  title: string;
  count: number;
  slug: string;
  article_user: {
    full_name: string;
    image?: string;
  };
}

export interface BlogCard extends BlogCardImpl, ExtraBlogCardImpl {}
