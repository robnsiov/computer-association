"use client";

import { useRef } from "react";
import useModal from "./use-modal";
import { useOnClickOutside } from "usehooks-ts";
import FadeAnimation from "../fade-animation/fade-animation";
import ModalImpl from "./types";

const Modal = ({ inProp, children, setProp }: ModalImpl) => {
  const ref = useRef(null);
  useOnClickOutside(ref, setProp);

  return (
    <>
      <FadeAnimation
        inProp={inProp}
        className="fixed inset-0 z-[999] bg-black/40 p-4 flex justify-center items-center"
      >
        <div
          ref={ref}
          className="bg-white dark:bg-slate-700 rounded-2xl max-w-2xl md:max-w-md w-full min-h-[400px] md:min-h-[100px] 
          p-5 duration-200 transition-all"
        >
          {children}
        </div>
      </FadeAnimation>
    </>
  );
};

export default Modal;
