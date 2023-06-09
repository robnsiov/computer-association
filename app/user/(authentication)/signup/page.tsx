import Signup from "@/components/user/pages/user/signup/signin/signup";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ثبت نام",
};

const Page = () => {
  return (
    <>
      <Signup />
    </>
  );
};
export default Page;
