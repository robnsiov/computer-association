import AboutUs from "@/components/user/pages/about-us/about-us";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "درباره ما",
};

const Page = () => {
  return (
    <>
      <AboutUs />
    </>
  );
};

export default Page;
