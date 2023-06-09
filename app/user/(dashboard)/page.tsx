import User from "@/components/user/pages/user/user";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "پروفایل کاربری",
};

const Page = () => {
  return (
    <>
      <User />
    </>
  );
};
export default Page;
