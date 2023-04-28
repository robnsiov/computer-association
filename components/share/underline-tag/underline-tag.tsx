"use client";
import cx from "classnames";
import UnderlineTagImpl from "./types";

const UnderlineTag = ({
  children,
  className = "",
  onClick = () => {},
}: UnderlineTagImpl) => {
  return (
    <>
      <span
        onClick={onClick}
        className={cx(
          `cursor-pointer text-primary text-[17px] 
            hover:underline underline-offset-8  decoration-dashed decoration-1 border-transparent`,
          { [className]: className }
        )}
      >
        {children}
      </span>
    </>
  );
};

export default UnderlineTag;
