"use client";

import Modal from "@/components/share/modal/modal";
import Blogs from "../blogs/blogs";
import useVideos from "./use-videos";

const Videos = () => {
  const { modal, toggleModal, onView, video } = useVideos();
  return (
    <>
      <Modal setProp={toggleModal} inProp={modal}>
        <div className="overflow-hidden flex justify-center items-center rounded-lg aspect-video">
          <video className="w-full aspect-video" controls={true} src={video} />
        </div>
      </Modal>
      <Blogs videos={true} onView={onView} />
    </>
  );
};
export default Videos;
