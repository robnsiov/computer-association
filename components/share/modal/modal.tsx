"use client";

import { useRef } from "react";
import useModal from "./use-modal";
import { useOnClickOutside } from "usehooks-ts";
import FadeAnimation from "../fade-animation/fade-animation";
import ModalImpl from "./types";

const Modal = ({ inProp, children, setProp }: ModalImpl) => {
  console.log(inProp);

  const ref = useRef(null);
  useOnClickOutside(ref, setProp);

  return (
    <>
      <FadeAnimation inProp={inProp}>
        <div className="fixed inset-0 z-[999] bg-black/40 p-4">
          <div
            ref={ref}
            className="fixed z-[999] bg-white rounded-2xl max-w-2xl md:max-w-md w-full min-h-[400px] md:min-h-[200px] p-5"
          >
            {children}
          </div>
        </div>
      </FadeAnimation>
    </>
  );
};

export default Modal;
