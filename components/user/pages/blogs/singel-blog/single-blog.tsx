import Image from "@/components/share/image";
import Markdown from "@/components/user/share/markdown/markdown";
import { notFound } from "next/navigation";
import SingleBlogImpl, { SingleBlogApi } from "./types";
import { api } from "@/constants/api";
import { Suspense } from "react";
import BlogLoader from "@/components/user/share/blog-loader/blog-loader";
import toJalali from "@/utils/to-jalali/to-jalali";
import Comments from "./comments/comments";

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
  console.log(blog);
  return (
    <>
      <div className="w-full  h-full scrollbar overflow-y-auto pl-4">
        <Suspense fallback={<BlogLoader />}>
          <div className="w-full max-w-xl mx-auto flex justify-start items-center flex-col mt-3">
            <h1 className="font-black text-5xl md:text-4xl text-center md:leading-[1.3] leading-[1.2] ">
              {blog.title}
            </h1>
            <div className="mt-8 mb-3">
              <span className="text-sm text-slate-500">
                آخرین ویرایش : {toJalali(new Date(blog.updated_at))}
              </span>
            </div>
            <div className="w-full aspect-video">
              <Image
                className="w-full h-full object-cover rounded-xl overflow-hidden"
                src={blog.image}
                width={600}
                height={600}
                alt={blog.title}
              />
            </div>
            <div className="w-full mt-8">
              <div className="w-full markdown-body">
                <Markdown markdown={blog.content} />
              </div>
            </div>
            <div className="mt-5 w-full">
              <Comments slug={blog.slug} />
            </div>
          </div>
        </Suspense>
      </div>
    </>
  );
};
export default SingleBlog;
