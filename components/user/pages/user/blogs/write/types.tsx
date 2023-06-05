export interface BlogFormValues {
  title?: string;
  image?: string;
  category?: number;
  catName?: string;
  enTitle?: string;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
}
