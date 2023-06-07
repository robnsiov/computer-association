import { Video } from "iconsax-react";
import { useState } from "react";
import { useBoolean } from "usehooks-ts";

const useVideos = () => {
  const [video, setVideo] = useState("");
  const { value: modal, toggle: toggleModal } = useBoolean(false);
  const onView = (src: string) => {
    // setVideo(src);
    toggleModal();
    setVideo("https://media.w3.org/2010/05/sintel/trailer_hd.mp4");
  };
  return { modal, toggleModal, onView, video };
};
export default useVideos;
