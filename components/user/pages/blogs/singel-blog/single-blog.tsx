import Image from "@/components/share/image";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "./markdown-styles.css";
import { Eye } from "iconsax-react";

const markdown = `# عنوان برنامه`;

const SingleBlog = () => {
  return (
    <>
      <div className="w-full  h-full scrollbar overflow-y-auto">
        <article className="w-full max-w-xl mx-auto flex justify-start items-center flex-col mt-3">
          <h1 className="font-black text-5xl md:text-4xl text-center md:leading-[1.3] leading-[1.2] ">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
          </h1>
          <div className="mt-5 mb-3">
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
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {markdown}
              </ReactMarkdown>
            </div>
          </div>
        </article>
      </div>
    </>
  );
};
export default SingleBlog;
