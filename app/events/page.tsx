import Events from "@/components/user/pages/events/events";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "رویداد ها",
};

const Page = () => {
  return (
    <>
      <Events />
    </>
  );
};

export default Page;
