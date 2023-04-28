import { useRef } from "react";
import { CSSTransition } from "react-transition-group";

import FadeAnimationImpl from "./types";

const FadeAnimation = ({
  inProp,
  children,
  className = "",
}: FadeAnimationImpl) => {
  const nodeRef = useRef(null);
  return (
    <>
      <CSSTransition
        in={inProp}
        nodeRef={nodeRef}
        timeout={300}
        classNames={{
          enter: "fade-enter",
          enterActive: "fade-enter-active",
          exit: "fade-exit",
          exitActive: "fade-exit-active",
        }}
        unmountOnExit
      >
        <div className={className} ref={nodeRef}>
          {children}
        </div>
      </CSSTransition>
    </>
  );
};
export default FadeAnimation;
