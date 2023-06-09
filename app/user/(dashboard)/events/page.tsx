import UserEvents from "@/components/user/pages/user/events/user-events";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "رویداد های من",
};

const Page = () => {
  return (
    <>
      <UserEvents />
    </>
  );
};
export default Page;
