"use client";

import Input from "@/components/share/input/input";
import useUser from "./use-user";
import Button from "@/components/share/button/button";
import Spinner from "@/components/share/spinner/spinner";
import FadeAnimation from "@/components/share/fade-animation/fade-animation";
import Image from "@/components/share/image";
import { useRef } from "react";

const User = () => {
  const {
    errors,
    loading,
    onSubmit,
    register,
    userDataLoading,
    changeInputFile,
    imageSrc,
  } = useUser();
  const inputRef = useRef<HTMLInputElement>(null);
  const inputClick = () => {
    inputRef.current?.click();
  };
  return (
    <>
      <div className="w-full h-full flex justify-start items-start flex-col">
        <form
          onSubmit={onSubmit}
          className="w-full flex justify-start items-start bg-white 
          p-4 flex-col relative overflow-hidden rounded-lg"
        >
          <FadeAnimation inProp={userDataLoading}>
            <div className="absolute inset-0 bg-white/90 z-10 flex justify-center items-center">
              <Spinner color="red-100" />
            </div>
          </FadeAnimation>
          <div className="w-full grid grid-cols-3 gap-4 md:grid-cols-1">
            <Input
              register={register}
              name={"full_name"}
              error={errors.full_name?.message}
              label="نام و نام خانوادگی"
              async={true}
            />
            <Input
              register={register}
              name={"student_number"}
              error={errors.student_number?.message}
              label="شماره دانشجویی"
              async={true}
            />
            <div
              onClick={inputClick}
              className="flex justify-center items-center"
            >
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
          <div className="mt-3 w-[180px]">
            <Button title="ویرایش" loading={loading} />
          </div>
        </form>
      </div>
    </>
  );
};
export default User;
