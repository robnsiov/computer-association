import ContactUs from "@/components/user/pages/contact-us/contact-us";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "تماس با ما",
};

const Page = () => {
  return (
    <>
      <ContactUs />
    </>
  );
};
export default Page;
