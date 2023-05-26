import { useBoolean } from "usehooks-ts";

const useSelectInput = () => {
  const { value: openSelect, setValue: setOpenSelect } = useBoolean(false);

  return { openSelect, setOpenSelect };
};

export default useSelectInput;
