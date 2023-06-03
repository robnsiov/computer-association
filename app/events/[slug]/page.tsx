import SingleEvent from "@/components/user/pages/events/single-event/single-event";
import PageImpl from "./types";

const Page = ({ params: { slug } }: PageImpl) => {
  return (
    <>
      {/* @ts-expect-error Async Server Component */}
      <SingleEvent slug={slug} />
    </>
  );
};
export default Page;
