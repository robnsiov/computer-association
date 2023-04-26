"use client";

import { useRef } from "react";
import useModal from "./use-modal";
import { useOnClickOutside } from "usehooks-ts";
import FadeAnimation from "../fade-animation/fade-animation";

const Modal = () => {
  const { setFalse, setTrue, value } = useModal({ inProp: true });

  const ref = useRef(null);
  useOnClickOutside(ref, setFalse);

  return (
    <>
      <FadeAnimation inProp={value}>
        <div className="fixed inset-0 z-[999] bg-black/40 flex justify-center items-center p-4">
          <div
            ref={ref}
            className="bg-white rounded-2xl max-w-2xl md:max-w-md w-full min-h-[400px] md:min-h-[200px]
        transition-all duration-200"
          ></div>
        </div>
      </FadeAnimation>
    </>
  );
};

export default Modal;
