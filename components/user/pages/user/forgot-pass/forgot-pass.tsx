"use client";
import Input from "@/components/share/input/input";
import Link from "@/components/share/link/link";
import Skeleton from "@/components/share/skeleton/skeleton";
import UnderlineTag from "@/components/share/underline-tag/underline-tag";
import { KeySquare } from "iconsax-react";
import cx from "classnames";
import useForgotPass from "./use-forgot-pass";
import Button from "@/components/share/button/button";
import { ForgotPassFormValues } from "./types";

const ForgotPass = () => {
  const { onSubmit, errors, register, userStatus, loading } = useForgotPass();
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
         rounded p-6 md:p-3"
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
            <div className="w-full h-[44px] rounded overflow-hidden">
              <Skeleton />
            </div>
          </div>
          <div className="w-[147px] h-[26px] mt-1 rounded overflow-hidden">
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
            <KeySquare
              size="34"
              className="text-slate-500 dark:text-slate-400"
            />
          </div>
          <Input<ForgotPassFormValues>
            register={register}
            label="ایمیل"
            name="email"
            type="text"
            wrapperClassName="mb-4"
            error={errors.email?.message}
          />

          <Button loading={loading} title={"ارسال"} />
        </form>

        <UnderlineTag className="mt-1">
          <Link href="/user/signin">قبلا ثبت نام کرده اید؟</Link>
        </UnderlineTag>
      </div>
    </>
  );
};
export default ForgotPass;
