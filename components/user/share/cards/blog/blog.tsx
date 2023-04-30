import Image from "@/components/share/image";
import Link from "@/components/share/link/link";
import { Eye } from "iconsax-react";
import BlogCardImpl from "./types";

const Blog = ({
  author,
  authorImage,
  category,
  href,
  image,
  title,
  view,
}: BlogCardImpl) => {
  return (
    <>
      <div
        className=" bg-slate-100 rounded-3xl flex justify-center items-center
      ring-4 ring-white p-2 flex-col transition-all duration-200 hover:bg-white
      hover:ring-slate-100"
      >
        <div className="relative w-full bg-white rounded-2xl flex justify-center items-center flex-col p-2">
          <div className="w-full flex justify-between items-center mb-2">
            <div className="w-1/2 flex justify-start items-center">
              <span className="text-slate-600 font-black text-sm max-w-[80px] truncate">
                {category}
              </span>
            </div>
            <span className="w-0.5 h-5 border-r-2 border-slate-400"></span>
            <div className="flex justify-end items-center w-1/2 mr-4">
              <div className="flex justify-end items-end flex-col ml-2">
                <span className="text-slate-400 text-[11px] max-w-[64px] truncate">
                  پست شده توسط
                </span>
                <span className="text-slate-700 font-semibold text-[14px] max-w-[80px] truncate">
                  {author}
                </span>
              </div>
              <div className="min-w-[28px] max-w-[28px] aspect-square rounded-full overflow-hidden">
                <Image
                  width={80}
                  height={80}
                  className="w-full h-full object-cover object-center"
                  src={authorImage}
                  alt="ok"
                />
              </div>
            </div>
          </div>
          <div className="w-full h-[150px] rounded-xl overflow-hidden">
            <Link href={href}>
              <Image
                width={300}
                height={200}
                className="w-full h-full object-cover object-center"
                src={image}
                alt="ok"
              />
            </Link>
          </div>
          <span className="absolute -bottom-2.5 blur-xl left-0 right-0 h-6 bg-slate-200"></span>
        </div>
        <div className="mt-2 px-2 w-full text-right text-slate-500 max-w-full truncate">
          {title}
        </div>
        <div
          className="mt-2 w-full flex justify-between items-center bg-white p-2 rounded-lg
        rounded-bl-3xl rounded-br-3xl"
        >
          <Link
            className="bg-slate-800 text-white w-[60%] p-3 text-sm rounded-lg 
            rounded-br-3xl text-center hover:ring-[3px] hover:ring-slate-400 transition-all duration-200"
            href={href}
          >
            مطالعه
          </Link>
          <div className="flex justify-start items-center">
            <span className="ml-2">22</span>
            <Eye size="18" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Blog;
