import Image from "@/components/share/image";
import Comments from "@/components/user/share/comments/commnets";
import Markdown from "@/components/user/share/markdown/markdown";
import { notFound } from "next/navigation";
import SingleBlogImpl, { SingleBlogApi } from "./types";
import { api } from "@/constants/api";

const markdown = `# عنوان برنامه`;

export const singleBlog = async (slug: string) => {
  try {
    const res = await fetch(`${api.baseURL}${api.singleBlog}${slug}/`);
    if (!res.ok) return notFound();
    const result: SingleBlogApi = await res.json();
    console.log(result);
    return result;
  } catch {
    notFound();
  }
};

const SingleBlog = async ({ slug }: SingleBlogImpl) => {
  const blog = await singleBlog(slug);
  return (
    <>
      <div className="w-full  h-full scrollbar overflow-y-auto pl-4">
        <div className="w-full max-w-xl mx-auto flex justify-start items-center flex-col mt-3">
          <h1 className="font-black text-5xl md:text-4xl text-center md:leading-[1.3] leading-[1.2] ">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
          </h1>
          <div className="mt-8 mb-3">
            <span className="text-xl text-slate-500">12 آبان 1402</span>
          </div>
          <div className="w-full aspect-video">
            <Image
              className="w-full h-full object-cover rounded-xl overflow-hidden"
              src="/images/el.jpg"
              width={600}
              height={600}
              alt="title"
            />
          </div>
          <div className="w-full mt-8">
            <div className="w-full markdown-body">
              <Markdown markdown={markdown} />
            </div>
          </div>
          <div className="mt-5 w-full">{/* <Comments  /> */}</div>
        </div>
      </div>
    </>
  );
};
export default SingleBlog;
