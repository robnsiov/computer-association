// @ts-nocheck
"use client";
import { useEffect, useRef, useState } from "react";
import Input from "@/components/share/input/input";
import useWriteBlog from "./use-write-blog";
import Image from "@/components/share/image";
import SelectInput from "@/components/share/select-input/select-input";
import Button from "@/components/share/button/button";
import cx from "classnames";
import Spinner from "@/components/share/spinner/spinner";
import { Eye } from "iconsax-react";
import "./write-blog.scss";

const WriteBlog = () => {
  const {
    errors,
    onSubmit,
    register,
    changeInputFile,
    imageSrc,
    setFormCategory,
    getValues,
    formLoading,
    categories,
  } = useWriteBlog();
  const ref = useRef<HTMLInputElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const inputClick = () => {
    inputRef.current?.click();
  };
  const [data, setData] = useState("");
  return (
    <>
      <div className="h-full w-full flex justify-start items-start flex-col overflow-auto scrollbar dark:dark-scrollbar">
        <div className="w-full flex justify-start items-start flex-col p-5 bg-white dark:bg-slate-600 rounded-xl">
          {/* <div className="dark:bg-slate-400 bg-slate-300 text-slate-600 p-1 rounded-md text-sm mb-4">
            <span>برای مشاهده متن نهایی بر روی آیکون</span>{" "}
            <Eye className="mx-1 inline-block" size="16" />{" "}
            <span>کلیک کنید</span>
          </div> */}
          <form
            className="w-full flex justify-start items-start flex-col"
            onSubmit={onSubmit}
          >
            <div className="w-full grid grid-cols-3 gap-4 md:grid-cols-2 sm:grid-cols-1">
              <div>
                <Input
                  register={register}
                  name={"title"}
                  label="عنوان"
                  error={errors.title?.message}
                  async={true}
                />
              </div>
              <div
                onClick={inputClick}
                className="flex justify-center items-center"
              >
                <div className="w-full" dir="ltr">
                  <Input
                    register={register}
                    name={"image"}
                    label="تصویر"
                    error={errors.image?.message}
                    wrapperClassName="cursor-pointer"
                    className="cursor-pointer"
                    read={true}
                    async={true}
                  />
                </div>
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
              <div>
                <SelectInput
                  name={"catName"}
                  label="انتخاب دسته بندی"
                  register={register}
                  read={true}
                  async={true}
                  error={errors.catName?.message}
                  wrapperClassName="cursor-pointer"
                  className="cursor-pointer"
                  categories={categories?.data ?? []}
                  activeCat={getValues("category") as number}
                  setFormCategory={setFormCategory}
                />
              </div>
              <div>
                <Input
                  register={register}
                  name={"enTitle"}
                  label="عنوان انگلیسی "
                  error={errors.enTitle?.message}
                  async={true}
                />
              </div>
            </div>
            <div className="mt-4 w-full">
              <Input
                register={register}
                name={"content"}
                label="متن مقاله"
                error={errors.content?.message}
                className="scrollbar min-h-[250px]"
                async={true}
                textarea={true}
              />
            </div>
            <div className="mt-4 w-[180px]">
              <Button title="ثبت" loading={formLoading} />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default WriteBlog;
