"use client";

import Button from "@/components/share/button/button";
import Input from "@/components/share/input/input";
import { SigninFormValues } from "./types";
import { CpuSetting, Profile2User, Setting3 } from "iconsax-react";
import useContactUs from "./use-conatct-us";

const ContactUs = () => {
  const { onSubmit, errors, register, loading } = useContactUs();
  return (
    <>
      <div className="relative w-full h-full flex justify-center items-center flex-col">
        <form
          onSubmit={onSubmit}
          className="w-full max-w-sm flex justify-center items-center flex-col  p-6 md:p-3
        shadow bg-white rounded"
        >
          <div
            className="w-16 h-16 rounded-full border-[1px] border-slate-200 
          flex justify-center items-center mb-6"
          >
            <CpuSetting size="34" className="text-primary" />
          </div>
          <Input<SigninFormValues>
            register={register}
            label="عنوان"
            name="title"
            type="text"
            wrapperClassName="mb-4"
            error={errors.title?.message}
          />
          <Input<SigninFormValues>
            register={register}
            label="ایمیل"
            name="email"
            type="text"
            wrapperClassName="mb-4"
            error={errors.email?.message}
          />
          <Input<SigninFormValues>
            register={register}
            label="پیام"
            name="message"
            type="text"
            textarea={true}
            wrapperClassName="mb-4"
            className="min-h-[140px]"
            error={errors.message?.message}
          />

          <Button loading={loading} title={"ارسال"} />
        </form>
      </div>
    </>
  );
};

export default ContactUs;
