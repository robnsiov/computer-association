"use client";

import Input from "@/components/share/input/input";
import useUser from "./use-user";
import Button from "@/components/share/button/button";
import Spinner from "@/components/share/spinner/spinner";
import FadeAnimation from "@/components/share/fade-animation/fade-animation";

const User = () => {
  const { errors, loading, onSubmit, register, userDataLoading } = useUser();
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
          <div className="w-full grid grid-cols-3 gap-3 md:grid-cols-1">
            <Input
              register={register}
              name={"fullname"}
              error={errors.fullname?.message}
              label="فامیلی"
              async={true}
            />
            <Input
              register={register}
              name={"studentNumber"}
              error={errors.studentNumber?.message}
              label="شماره دانشجویی"
              async={true}
            />
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
