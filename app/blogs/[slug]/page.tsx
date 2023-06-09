import SingleBlog, {
  singleBlog,
} from "@/components/user/pages/blogs/singel-blog/single-blog";
import PageImpl from "./types";
import { Metadata } from "next";

export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { title } = await singleBlog(slug);
  return { title };
}

const Page = ({ params: { slug } }: PageImpl) => {
  return (
    <>
      {/* @ts-expect-error Async Server Component */}
      <SingleBlog slug={slug} />
    </>
  );
};

export default Page;
