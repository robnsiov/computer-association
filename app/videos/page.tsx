import Videos from "@/components/user/pages/videos/videos";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ویدیو ها",
};

const Page = () => {
  return (
    <>
      <Videos />
    </>
  );
};
export default Page;
