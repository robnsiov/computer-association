"use client";
import MDEditor from "@uiw/react-md-editor";
import rehypeSanitize from "rehype-sanitize";
import "./write-box.css";
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Input from "@/components/share/input/input";
import useWriteBlog from "./use-write-blog";
import Image from "@/components/share/image";

const WriteBlog = () => {
  const { errors, onSubmit, register, changeInputFile, imageSrc } =
    useWriteBlog();

  const ref = useRef(null);
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    const script = document.createElement("script");
    const link = document.createElement("link");
    link.setAttribute("rel", "stylesheet");
    link.setAttribute(
      "href",
      "https://cdn.jsdelivr.net/npm/simplemde-rtl@latest/dist/simplemde-rtl.min.css"
    );
    script.setAttribute(
      "src",
      "https://cdn.jsdelivr.net/npm/simplemde-rtl@latest/dist/simplemde-rtl.min.js"
    );
    document.head.appendChild(script);
    document.head.appendChild(link);
    setTimeout(() => {
      var simplemde = new SimpleMDE({
        element: document.getElementById("my-text-area"),
      });
    }, 2000);
  }, []);

  const inputClick = () => {
    inputRef.current?.click();
  };

  return (
    <>
      <div className="h-full w-full scrollbar flex justify-start items-start flex-col">
        <div className="w-full">
          <form className="w-full p-6 bg-white rounded-xl flex justify-start items-start flex-col">
            <div className="w-full grid grid-cols-2 gap-4">
              <div>
                <Input
                  register={register}
                  name={"title"}
                  label="عنوان"
                  error={errors.title?.message}
                />
              </div>
              <div>
                <Input
                  register={register}
                  name={"content"}
                  label="توضیحات کوتاه"
                  error={errors.shortDesc?.message}
                />
              </div>
              <div
                onClick={inputClick}
                className="flex justify-center items-center"
              >
                <Input
                  register={register}
                  name={"image"}
                  label="تصویر مقاله"
                  error={errors.image?.message}
                  wrapperClassName="cursor-pointer"
                  className="cursor-pointer"
                  read={true}
                  async={true}
                />
                {imageSrc && (
                  <div className="min-w-[45px] max-w-[45px] h-[45px] bg-red-400 rounded-md mr-2 overflow-hidden">
                    <Image
                      className="w-full h-full object-cover"
                      width={45}
                      height={45}
                      alt="img"
                      src={imageSrc}
                    />
                  </div>
                )}

                <input
                  onChange={changeInputFile}
                  ref={inputRef}
                  type="file"
                  className="hidden"
                  accept="image/png, image/gif, image/jpeg"
                />
              </div>
            </div>
            <div className="w-full z-[100] mt-4">
              <textarea
                value={"**سلام**"}
                onChange={console.log}
                ref={ref}
                id="my-text-area"
              ></textarea>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default WriteBlog;
