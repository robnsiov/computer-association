import Events from "@/components/user/pages/events/events";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "نشریه",
};

const Page = () => {
  return (
    <>
      <Events journal={true} />
    </>
  );
};
export default Page;
