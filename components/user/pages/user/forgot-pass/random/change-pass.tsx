"use client";
import Input from "@/components/share/input/input";
import Link from "@/components/share/link/link";
import Skeleton from "@/components/share/skeleton/skeleton";
import UnderlineTag from "@/components/share/underline-tag/underline-tag";
import { ShieldTick } from "iconsax-react";
import cx from "classnames";
import Button from "@/components/share/button/button";
import { ChangePassFormValues } from "./types";
import useChangePass from "./use-change-pass";

const ChangePass = () => {
  const { onSubmit, errors, register, userStatus, loading } = useChangePass();
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
            <div className="w-full h-[45.6px] rounded mb-4 overflow-hidden">
              <Skeleton />
            </div>
            <div className="w-full h-[45.6px] rounded mb-4 overflow-hidden">
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
        shadow bg-white rounded"
        >
          <div
            className="w-16 h-16 rounded-full border-[1px] border-slate-200 
          flex justify-center items-center mb-6"
          >
            <ShieldTick size="34" className="text-slate-500" />
          </div>
          <Input<ChangePassFormValues>
            register={register}
            label="ایمیل"
            name="email"
            type="text"
            wrapperClassName="mb-4"
            error={errors.email?.message}
            async={true}
          />
          <Input<ChangePassFormValues>
            register={register}
            label="کد اعتبارسنجی"
            name="code"
            type="text"
            wrapperClassName="mb-4"
            error={errors.code?.message}
          />
          <Input<ChangePassFormValues>
            register={register}
            label="رمز عبور"
            name="password"
            type="password"
            wrapperClassName="mb-4"
            error={errors.password?.message}
          />
          <Input<ChangePassFormValues>
            register={register}
            label="تکرار رمز عبور"
            name="confirm"
            type="password"
            wrapperClassName="mb-4"
            error={errors.confirm?.message}
          />

          <Button loading={loading} title={"تغییر رمز عبور"} />
        </form>

        <UnderlineTag className="mt-1">
          <Link href="/">بازگشت به خانه</Link>
        </UnderlineTag>
      </div>
    </>
  );
};
export default ChangePass;
