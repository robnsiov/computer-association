import Blogs from "@/components/user/pages/user/blogs/blogs";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "مقالات من",
};

const Page = () => {
  return (
    <>
      <Blogs />
    </>
  );
};

export default Page;
