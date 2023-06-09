import Lagout from "@/components/user/pages/user/logout/logout";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "خروج",
};

const Page = () => {
  return (
    <>
      <Lagout />
    </>
  );
};
export default Page;
