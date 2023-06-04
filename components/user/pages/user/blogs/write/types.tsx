export interface BlogFormValues {
  title?: string;
  shortDesc?: string;
  image?: string;
  category?: number;
  catName?: string;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
}
