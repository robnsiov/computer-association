"use client";

import { CloudPlus, Copy, TickSquare } from "iconsax-react";
import useUploader from "./use-uploader";
import { useRef } from "react";
import Image from "@/components/share/image";
import Spinner from "@/components/share/spinner/spinner";

const Uploader = () => {
  const {
    changeInputFile,
    uploadCount,
    copyToClipboard,
    links,
    copiedLink,
    linksLoading,
  } = useUploader();
  const inputRef = useRef<HTMLInputElement>(null);
  const inputClick = () => {
    inputRef.current?.click();
  };
  return (
    <>
      <div
        className="w-full h-full overflow-auto scrollbar flex justify-start items-end
       flex-col p-4 bg-white rounded-lg overflow-y-auto scrollbar"
      >
        <div className="w-full flex justify-start items-start mb-4">
          <div
            className="group w-9 h-9 bg-transparent transition-all duration-200
          hover:bg-slate-300 rounded-md hover:ring-2 border-[1px] border-slate-400 border-dashed
           hover:border-0 hover:ring-slate-200 flex justify-center items-center"
          >
            <CloudPlus
              onClick={inputClick}
              className="text-slate-600 cursor-pointer group-hover:text-white"
            />
            <input
              onChange={changeInputFile}
              ref={inputRef}
              type="file"
              className="hidden"
              accept="image/png, image/gif, image/jpeg"
            />
          </div>
          {uploadCount !== -1 && (
            <div className="flex justify-start items-start mt-1 mr-3">
              <span className="ml-2 text-slate-500 font-semibold">
                در حال آپلود تصویر
              </span>
              <div>
                <span className="text-[10px]">%</span>
                <span>({uploadCount})</span>{" "}
              </div>
            </div>
          )}
        </div>
        {linksLoading && (
          <div className="flex justify-center items-center w-full">
            <Spinner color="text-slate-600" />
          </div>
        )}

        <div
          className="w-full grid grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 460px:grid-cols-1"
          dir="ltr"
        >
          {links.map((link) => (
            <div
              key={link}
              className="bg-slate-200 text-slate-100 flex justify-between items-center
        rounded-md py-2 px-4 border-2 border-slate-400 border-dashed mr-2 mb-2"
              dir="ltr"
            >
              <div>
                {copiedLink === link ? (
                  <>
                    <TickSquare className="text-slate-600 mr-3" />
                  </>
                ) : (
                  <Copy
                    onClick={() => copyToClipboard(link)}
                    className="text-slate-600 mr-3 cursor-pointer hover:text-slate-400"
                  />
                )}
              </div>
              <span className="text-slate-600 font-semibold truncate">
                {link}
              </span>

              <div className="min-w-[24px] h-6 ml-3 rounded-lg overflow-hidden">
                <Image
                  alt={link}
                  src={link}
                  width={24}
                  height={24}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Uploader;
