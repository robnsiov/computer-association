"use client";

import PageWait from "../page-wait/page-wait";
import ProtectedImpl from "./types";
import useProtected from "./use-protected";

const Protected = ({ children }: ProtectedImpl) => {
  const { userStatus } = useProtected();
  return (
    <>
      {userStatus === "AUTHENTICATED" ? <>{children}</> : <PageWait />}
      <PageWait />
    </>
  );
};
export default Protected;
