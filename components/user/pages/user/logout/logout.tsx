"use client";

import BlogLoader from "@/components/user/share/blog-loader/blog-loader";
import useLagout from "./use-logout";

const Lagout = () => {
  useLagout();
  return (
    <>
      <BlogLoader />
    </>
  );
};
export default Lagout;
