import { create } from "zustand";
import ActiveCategoryStore from "./types";

const useActiveCategoryStore = create<ActiveCategoryStore>()((setState) => ({
  cat: "",
  set: (cat) => setState({ cat }),
}));

export default useActiveCategoryStore;
