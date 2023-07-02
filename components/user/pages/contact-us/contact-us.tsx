"use client";

import Button from "@/components/share/button/button";
import Input from "@/components/share/input/input";
import { ContactUsFormValues } from "./types";
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
        shadow bg-white dark:bg-slate-600 rounded"
        >
          <div
            className="w-16 h-16 rounded-full border-[1px] border-slate-200 
          flex justify-center items-center mb-6"
          >
            <CpuSetting
              size="34"
              className="text-slate-500 dark:text-slate-400"
            />
          </div>
          <Input<ContactUsFormValues>
            register={register}
            label="عنوان"
            name="title"
            type="text"
            wrapperClassName="mb-4"
            error={errors.title?.message}
          />
          <Input<ContactUsFormValues>
            register={register}
            label="ایمیل"
            name="email"
            type="text"
            wrapperClassName="mb-4"
            error={errors.email?.message}
          />
          <Input<ContactUsFormValues>
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
