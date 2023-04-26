"use client";
import { Profile2User, Eye } from "iconsax-react";

const User = () => {
  return (
    <>
      <div className="w-full h-full flex justify-center items-center flex-col">
        <div
          className="max-w-sm w-full flex justify-center items-center flex-col p-6 
        shadow bg-white rounded mb-4"
        >
          <div
            className="w-16 h-16 rounded-full border-[1px] border-slate-200 
          flex justify-center items-center mb-6"
          >
            <Profile2User size="34" className="text-blue-600" />
          </div>
          {/* <span className="font-semibold text-2xl mt-2 mb-4">ثبت نام</span> */}
          <div className="relative w-full flex justify-end items-end flex-col">
            <input
              className="w-full rounded p-2 py-2.5 pl-9 border-[1px] border-slate-200 bg-transparent
                transition-all duration-200 peer outline-none  focus:ring-2 focus:ring-[#4945ff]"
            />
            <span
              className="text-lg 
              peer-focus:-top-4 peer-focus:px-2 peer-focus:text-[#4945ff]
            absolute top-2 right-3
            bg-white duration-200 transition-all"
            >
              ایمیل
            </span>
            <Eye
              size="20"
              className="absolute top-1/2 left-2.5 -translate-y-1/2 cursor-pointer"
            />
          </div>
          <button
            className="w-full rounded border-none outline-none mt-3 text-white bg-[#4945ff]
            hover:ring-[#4945ff] hover:ring-2 hover:bg-transparent hover:text-[#4945ff] h-[44px] text-lg
            transition-all duration-200"
          >
            ثبت نام
          </button>
        </div>
        <span
          className="cursor-pointer mt-1 text-[#4945ff] text-[17px] 
            hover:underline underline-offset-8  decoration-dashed decoration-1	  border-transparent"
        >
          قبلا ثبت نام کرده اید؟
        </span>
      </div>
    </>
  );
};
export default User;
