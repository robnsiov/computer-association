export interface BlogFormValues {
  title?: string;
  image?: string;
  category?: number;
  catName?: string;
  enTitle?: string;
  content: string;
}

export interface UserSingleBlog {
  category: number;
  category_name: string;
  content: string;
  image: string;
  title: string;
  en_title: string;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
}
