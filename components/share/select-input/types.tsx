import InputImpl from "../input/types";

export default interface SelectInputImpl<T> extends InputImpl<T> {
  categories: Array<{ name: string; id: number }>;
  activeCat: number;
  setFormCategory(catName: string, category: number): void;
}
