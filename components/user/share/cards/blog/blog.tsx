import Link from "@/components/share/link/link";
import { Eye } from "iconsax-react";

const Blog = () => {
  return (
    <>
      <div
        className="w-[270px] bg-slate-100 rounded-3xl flex justify-center items-center
      ring-4 ring-white p-2 flex-col transition-all duration-200 hover:bg-white
      hover:ring-slate-100"
      >
        <div className="relative w-full bg-white rounded-2xl flex justify-center items-center flex-col p-2">
          <div className="w-full flex justify-end items-center mb-2">
            <div className="flex justify-end items-end flex-col ml-2">
              <span className="text-slate-400 text-[11px]">پست شده توسط</span>
              <span className="text-slate-700 font-semibold text-[14px]">
                محمدرضا
              </span>
            </div>
            <div className="w-7 aspect-square bg-slate-500 rounded-full"></div>
          </div>
          <div className="bg-slate-400 w-full h-[150px] rounded-xl"></div>
          <span className="absolute -bottom-2.5 blur-xl left-0 right-0 h-6 bg-[#CDD8DB]"></span>
        </div>
        <div className="mt-2 px-2 w-full text-right text-slate-500">
          لورم ایپسوم متن ساختگی
        </div>
        <div
          className="mt-2 w-full flex justify-between items-center bg-white p-2 rounded-lg
        rounded-bl-3xl rounded-br-3xl"
        >
          <Link
            className="bg-slate-800 text-white w-[60%] p-3 text-sm rounded-lg 
            rounded-br-3xl text-center hover:ring-[3px] hover:ring-slate-400 transition-all duration-200"
            href="/"
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
