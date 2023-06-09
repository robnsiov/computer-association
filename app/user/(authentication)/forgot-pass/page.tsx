import ForgotPass from "@/components/user/pages/user/forgot-pass/forgot-pass";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "فراموشی رمز عبور",
};

const Page = () => {
  return (
    <>
      <ForgotPass />
    </>
  );
};
export default Page;
