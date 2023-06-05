import { useBoolean } from "usehooks-ts";

const useComments = () => {
  const { value: showModal, toggle: toggleShowModal } = useBoolean(false);

  return { showModal, toggleShowModal };
};
export default useComments;
