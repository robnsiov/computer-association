import SingleEvent, {
  singleEvent,
} from "@/components/user/pages/events/single-event/single-event";
import PageImpl from "./types";
import { Metadata } from "next";

export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { title } = await singleEvent(slug);
  return { title };
}

const Page = ({ params: { slug } }: PageImpl) => {
  return (
    <>
      {/* @ts-expect-error Async Server Component */}
      <SingleEvent slug={slug} />
    </>
  );
};
export default Page;
