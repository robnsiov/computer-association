import Home from "@/components/user/pages/home/home";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "خانه",
};

const Page = () => {
  return (
    <>
      <Home />
    </>
  );
};
export default Page;
