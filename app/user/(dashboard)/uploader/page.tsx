import Uploader from "@/components/user/pages/user/uploader/uploader";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "آپلودر",
};

const Page = () => {
  return (
    <>
      <Uploader />
    </>
  );
};
export default Page;
