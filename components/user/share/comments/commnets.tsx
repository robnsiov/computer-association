"use client";
import { User } from "iconsax-react";
import useComments from "./use-comments";
import Input from "@/components/share/input/input";
import Button from "@/components/share/button/button";
import FadeAnimation from "@/components/share/fade-animation/fade-animation";
import toJalali from "@/utils/to-jalali/to-jalali";

const Comments = () => {
  const {
    errors,
    onSubmit,
    register,
    showCommentForm,
    toggleShowCommentForm,
    data,
    isLoading,
    formLoading,
  } = useComments();
  return (
    <>
      <div className="w-full flex justify-start items-start flex-col">
        <span
          onClick={toggleShowCommentForm}
          className="text-slate-600 cursor-pointer font-semibold text-sm hover:text-slate-400 mb-4"
        >
          {showCommentForm ? "بستن فرم ایجاد نظر" : "برای ثبت نظر کلیک کنید"}
        </span>
        <FadeAnimation inProp={showCommentForm} className="w-full">
          <form
            onSubmit={onSubmit}
            className="p-5 bg-white rounded-xl w-full mb-5"
          >
            <div className="max-w-xs mb-4">
              <Input
                label="نام و نام خانوادگی"
                error={errors.name?.message}
                name={"name"}
                register={register}
              />
            </div>
            <Input
              label="متن"
              error={errors.body?.message}
              name={"body"}
              register={register}
              textarea={true}
            />
            <div className="w-[150px] mt-4">
              <Button title="ثبت" loading={formLoading} />
            </div>
          </form>
        </FadeAnimation>
        <FadeAnimation inProp={isLoading}>
          <span className="text-slate-400 mb-2">درحال بارگزاری نظرات ... </span>
        </FadeAnimation>
        <FadeAnimation inProp={!isLoading && data?.data.length === 0}>
          <span className="text-slate-400 mb-2">
            تا کنون نظری به ثبت نرسیده است
          </span>
        </FadeAnimation>
        <FadeAnimation
          inProp={data?.data.length !== 0}
          className="flex justify-start items-start flex-col"
        >
          {data?.data.map(({ body, date, id, user }) => (
            <div
              key={id}
              className="inline-flex justify-start items-start p-3 bg-slate-200 rounded-xl
        md:flex-col mb-3"
            >
              <div className="w-full flex justify-center items-start">
                <div
                  className="bg-slate-300 min-w-[40px] h-[40px] flex justify-center items-center rounded-full
            ml-3 md:hidden"
                >
                  <User className="text-slate-100" />
                </div>
                <div className="flex justify-start items-start flex-col w-full ">
                  <div className="flex justify-start items-start">
                    <span className="font-bold ml-2">{user.name}</span>
                  </div>
                  <p className="text-slate-600">{body}</p>
                </div>
              </div>
              <span className="whitespace-nowrap text-slate-400 pr-3 text-sm md:w-full md:mt-2 md:text-left">
                {toJalali(date)}
              </span>
            </div>
          ))}
        </FadeAnimation>
      </div>
    </>
  );
};
export default Comments;
