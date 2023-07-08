"use client";

import Modal from "@/components/share/modal/modal";
import useComments from "./use-comments";
import CommentsImpl from "./types";
import MainComments from "../../../../share/comments/commnets";

const Comments = ({ slug }: CommentsImpl) => {
  const { toggleShowModal, showModal } = useComments();
  return (
    <>
      <Modal inProp={showModal} setProp={toggleShowModal}>
        <MainComments onConfirm={toggleShowModal} slug={slug} type="ARTICLE" />
      </Modal>
      <span
        onClick={toggleShowModal}
        className="dark:text-slate-400 hover:text-slate-400 cursor-pointer"
      >
        مشاهده کامنت ها
      </span>
    </>
  );
};
export default Comments;
