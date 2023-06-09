import Blogs from "@/components/user/pages/blogs/blogs";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "مقالات",
};

const Page = () => {
  return (
    <>
      <Blogs />
    </>
  );
};

export default Page;
