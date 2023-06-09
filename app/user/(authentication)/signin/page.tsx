import Signin from "@/components/user/pages/user/signin/signin";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ورود",
};

const Page = () => {
  return (
    <>
      <Signin />
    </>
  );
};

export default Page;
