import { useState } from "react";
import { useBoolean } from "usehooks-ts";
import { UseInputImpl } from "./types";

const useInput = ({ type }: UseInputImpl) => {
  // show password by eye icon
  const { setFalse: hideEye, setTrue: showEye, value: eye } = useBoolean(true);
  // input-blur
  const { setValue: setFocus, value: focus } = useBoolean(true);
  const [inputType, setInputType] = useState(type);

  const toText = () => {
    hideEye();
    setInputType("text");
  };
  const toPassword = () => {
    setInputType(type);
    showEye();
  };

  return { toText, toPassword, inputType, eye, focus, setFocus };
};
export default useInput;
