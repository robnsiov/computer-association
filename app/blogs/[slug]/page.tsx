import SingleBlog from "@/components/user/pages/blogs/singel-blog/single-blog";
import PageImpl from "./types";

const Page = ({ params: { slug } }: PageImpl) => {
  return (
    <>
      {/* @ts-expect-error Async Server Component */}
      <SingleBlog slug={slug} />
    </>
  );
};

export default Page;
