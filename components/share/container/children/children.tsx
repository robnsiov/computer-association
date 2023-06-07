import { memo } from "react";
import ChildrenImpl from "./types";

const Children = ({ children }: ChildrenImpl) => {
  return <>{children}</>;
};
export default memo(Children);
