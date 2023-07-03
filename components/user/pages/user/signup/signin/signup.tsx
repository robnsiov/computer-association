"use client";

import { Profile2User } from "iconsax-react";
import useSignin from "./use-signup";
import { SignupFormValues } from "./types";
import Input from "@/components/share/input/input";
import Button from "@/components/share/button/button";
import UnderlineTag from "@/components/share/underline-tag/underline-tag";
import Link from "@/components/share/link/link";
import Skeleton from "@/components/share/skeleton/skeleton";
import cx from "classnames";
import CheckBox from "@/components/share/check-box/check-box";

const Signup = () => {
  const { onSubmit, errors, register, userStatus, loading, showUniField } =
    useSignin();
  return (
    <>
      <div className="relative max-w-sm w-full flex justify-center items-center flex-col">
        <div
          className={cx(
            `duration-200 transition-all absolute z-30 inset-0 flex justify-center items-center flex-col`,
            { "opacity-0 invisible": userStatus === "ANONYMOUS" },
            { "opacity-100 visible": userStatus === "UNKNOWW" }
          )}
        >
          <div
            className="w-full flex justify-center items-center flex-col mb-4 
         rounded md:p-3 p-6"
          >
            <div
              className="w-16 h-16 border-[1px] 
          flex justify-center items-center mb-6 rounded-full overflow-hidden"
            >
              <Skeleton />
            </div>
            <div className="w-full h-[45.6px] rounded mb-4 overflow-hidden">
              <Skeleton />
            </div>
            <div className="w-full h-[45.6px] rounded mb-3 overflow-hidden">
              <Skeleton />
            </div>
            <div className="w-full h-[35px] rounded mb-1 overflow-hidden">
              <Skeleton />
            </div>
            <div className="w-full h-[45.6px] rounded mb-4 overflow-hidden">
              <Skeleton />
            </div>
            <div className="w-full h-[45.6px] rounded mb-4 overflow-hidden">
              <Skeleton />
            </div>
            <div className="w-full h-[45.6px] rounded mb-4 overflow-hidden">
              <Skeleton />
            </div>
            <div className="w-full h-[45.6px] rounded mb-4 overflow-hidden">
              <Skeleton />
            </div>
          </div>
          <div className="w-[147px] h-[26px] -mt-3 rounded overflow-hidden">
            <Skeleton />
          </div>
        </div>
        <form
          onSubmit={onSubmit}
          className="w-full flex justify-center items-center flex-col mb-4  p-6 md:p-3
        shadow bg-white dark:bg-slate-600 rounded"
        >
          <div
            className="w-16 h-16 rounded-full border-[1px] border-slate-200 
          flex justify-center items-center mb-6"
          >
            <Profile2User
              size="34"
              className="text-slate-500 dark:text-slate-400"
            />
          </div>
          <Input<SignupFormValues>
            register={register}
            label="نام و نام خانوادگی"
            name="fullName"
            type="text"
            wrapperClassName="mb-4"
            error={errors.fullName?.message}
          />
          <Input<SignupFormValues>
            register={register}
            label="شماره دانشجویی"
            name="studentNumber"
            type="number"
            wrapperClassName="mb-3"
            error={errors.studentNumber?.message}
          />
          <div className="flex justify-start items-center w-full mb-4">
            <CheckBox<SignupFormValues>
              id="isQut"
              register={register}
              name="isQut"
              error={errors.isQut?.message}
            />
            <label
              htmlFor="isQut"
              className="mr-2 text-slate-700 cursor-pointer"
            >
              عضو دانشگاه صنعتی قم هستم
            </label>
          </div>
          <div className={cx("w-full", { "opacity-10": !showUniField })}>
            <Input<SignupFormValues>
              register={register}
              label="نام دانشگاه (مثال : دانشگاه تهران)"
              name="university"
              type="text"
              wrapperClassName="mb-4"
              error={errors.university?.message}
              read={!showUniField}
            />
          </div>

          <Input<SignupFormValues>
            register={register}
            label="ایمیل"
            name="email"
            type="text"
            wrapperClassName="mb-4"
            error={errors.email?.message}
          />
          <Input<SignupFormValues>
            register={register}
            label="رمزعبور"
            name="password"
            type="password"
            wrapperClassName="mb-4"
            error={errors.password?.message}
          />

          <Button loading={loading} title={"ثبت نام"} />
        </form>

        <UnderlineTag className="mt-1">
          <Link href="/user/signin">قبلا ثبت نام کرده اید؟</Link>
        </UnderlineTag>
      </div>
    </>
  );
};
export default Signup;
