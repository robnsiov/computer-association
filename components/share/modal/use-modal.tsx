import { useState } from "react";
import { useBoolean } from "usehooks-ts";
import { UseModalImpl } from "./types";

const useModal = ({ inProp }: UseModalImpl) => {
  const { setFalse, value, setTrue } = useBoolean(inProp);
  return { value, setFalse, setTrue };
};

export default useModal;
