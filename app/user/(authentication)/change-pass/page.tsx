import ChangePass from "@/components/user/pages/user/forgot-pass/random/change-pass";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "تغییر رمز عبور",
};

const Page = () => {
  return (
    <>
      <ChangePass />
    </>
  );
};
export default Page;
