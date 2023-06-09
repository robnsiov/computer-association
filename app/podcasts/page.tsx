import Podcasts from "@/components/user/pages/podcasts/podcasts";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "پادکست ها",
};

const Page = () => {
  return (
    <>
      <Podcasts />
    </>
  );
};
export default Page;
