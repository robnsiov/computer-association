import useMenuStatusStore from "@/context/menu-status/menu-status-store";
import { useViewportSize } from "@mantine/hooks";

const useMenu = () => {
  const [open, setOpen] = useMenuStatusStore((state) => [
    state.open,
    state.set,
  ]);
  const { width } = useViewportSize();

  return { open, setOpen, windowWidth: width };
};

export default useMenu;
