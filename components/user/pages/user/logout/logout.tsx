"use client";

import PageWait from "@/components/user/share/page-wait/page-wait";
import useLagout from "./use-logout";

const Lagout = () => {
  useLagout();
  return (
    <>
      <PageWait />
    </>
  );
};
export default Lagout;
