import { create } from "zustand";
import MenuStatusStore from "./types";

const useMenuStatusStore = create<MenuStatusStore>()((setState) => ({
  open: false,
  set: (open) => setState(() => ({ open })),
}));

export default useMenuStatusStore;
