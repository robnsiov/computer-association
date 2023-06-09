import WriteBlog from "@/components/user/pages/user/blogs/write/write-blog";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ایجاد مقاله",
};

const Page = () => {
  return (
    <>
      <WriteBlog />
    </>
  );
};
export default Page;
