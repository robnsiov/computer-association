"use client";

import Image from "@/components/share/image";
import Link from "@/components/share/link/link";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import { Tooltip } from "@mantine/core";

import {
  ArrowLeft3,
  ArrowRight3,
  Edit,
  FolderOpen,
  Gallery,
  Microphone2,
} from "iconsax-react";
import { useRef } from "react";

const Podcasts = () => {
  const ref = useRef({ go(dir: string) {} });
  const goPrev = () => {
    ref.current.go("<");
  };
  const goNext = () => {
    ref.current.go(">");
  };
  return (
    <>
      <div className="absolute top-0 left-0 right-0 h-[70%]">
        <Image
          src="/images/el.jpg"
          width={1000}
          height={600}
          alt="podcast"
          className="w-full h-full object-cover 
        object-top"
        />
        <span
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, #0b122020 0%, #0B1220 100%);",
          }}
        ></span>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-[#0B1220]"></div>
      <div className="absolute inset-0 z-10 flex justify-end items-end flex-col">
        <div className="flex w-full justify-center  p-9">
          <div className="w-1/2 flex justify-start items-start flex-col">
            <h1 className="font-extrabold text-4xl leading-[1.3] text-slate-50 w-full truncate">
              شبکه چگونه کار میکند ؟
            </h1>
            <span className="text-slate-200 mt-4 three-line-truncate">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              کتابهای زیادی
            </span>
            <Link
              href="/"
              className="whitespace-nowrap py-1 px-9 rounded-xl border-2 tru
               border-slate-300 text-slate-200 mt-5"
            >
              دنبال کردن ما
            </Link>
          </div>
          <div
            className="w-1/2 min-h-full 
          flex justify-center items-start flex-col pr-24 space-y-3"
          >
            <div className="flex justify-center items-center">
              <Tooltip label="گوینده" color="#414856" position="top">
                <Microphone2 className="text-slate-300 ml-2" />
              </Tooltip>
              <span className="text-slate-200">علی حسینی</span>
            </div>
            <div className="flex justify-center items-center">
              <Tooltip label="جمع آوری اطلاعات" color="#414856" position="top">
                <FolderOpen className="text-slate-300 ml-2" />
              </Tooltip>
              <span className="text-slate-200">علی حسینی</span>
            </div>
            <div className="flex justify-center items-center">
              <Tooltip label="ویرایش متن" color="#414856" position="top">
                <Edit className="text-slate-300 ml-2" />
              </Tooltip>
              <span className="text-slate-200">علی حسینی</span>
            </div>
            <div className="flex justify-center items-center">
              <Tooltip label="طراح پوستر" color="#414856" position="top">
                <Gallery className="text-slate-300 ml-2" />
              </Tooltip>
              <span className="text-slate-200">علی حسینی</span>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center items-center flex-col">
          <div className="flex w-full justify-start items-center mb-1 mt-3 cursor-pointer pr-9">
            <ArrowRight3
              onClick={goPrev}
              className="text-slate-600 transition-all duration-200 hover:text-slate-400"
            />
            <ArrowLeft3
              onClick={goNext}
              className="text-slate-600 transition-all duration-200 hover:text-slate-400"
            />
          </div>
          <div className="w-full pr-7">
            <Splide
              ref={ref}
              options={{
                perPage: 7,
                direction: "rtl",
                arrows: false,
                pagination: false,
                perMove: 1,
              }}
            >
              <SplideSlide className="p-3">
                <Link
                  href="/"
                  className="w-full flex justify-center items-center text-center"
                >
                  <div className="w-full aspect-square relative">
                    <Image
                      src="/images/el.jpg"
                      width={200}
                      height={200}
                      className="w-full h-full object-cover object-center rounded-full"
                      alt="pod"
                    />
                    <div
                      className="absolute top-0 left-0 w-full aspect-square
                   bg-slate-900/60 rounded-full ring-2 ring-slate-600 
                   flex justify-center items-center"
                    >
                      <div className="flex justify-center items-center scale-x-125">
                        <span className="w-0.5 h-7 border-r-2 border-slate-600  mx-[1px] animate-[wave_1s_1.25s_ease-in-out_infinite]"></span>
                        <span className="w-0.5 h-7 border-r-2 border-slate-600  mx-[1px] animate-[wave_1s_0.5s_ease-in-out_infinite]"></span>
                        <span className="w-0.5 h-7 border-r-2 border-slate-600  mx-[1px] animate-[wave_1s_0.25s_ease-in-out_infinite]"></span>
                        <span className="w-0.5 h-7 border-r-2 border-slate-600  mx-[1px] animate-[wave_1s_1.25s_ease-in-out_infinite]"></span>
                        <span className="w-0.5 h-7 border-r-2 border-slate-600  mx-[1px] animate-[wave_1s_0s_ease-in-out_infinite]"></span>
                      </div>
                    </div>
                    <h2 className="w-full truncate text-slate-100 mt-3 font-extrabold">
                      عنوان پادکست
                    </h2>
                    <span className="w-full truncate  text-slate-400 mt-1 text-[13px] font-extralight">
                      توضیحات پادکست
                    </span>
                  </div>
                </Link>
              </SplideSlide>
              <SplideSlide className="p-3">
                <div className="w-full flex justify-center items-center text-center">
                  <div className="w-full aspect-square">
                    <Image
                      src="/images/el.jpg"
                      width={200}
                      height={200}
                      className="w-full h-full object-cover object-center rounded-full"
                      alt="pod"
                    />
                    <h2 className="text-slate-100 mt-2 font-extrabold">
                      عنوان پادکست
                    </h2>
                    <span className="text-slate-400 mt-0.5 text-sm font-extralight">
                      توضیحات پادکست
                    </span>
                  </div>
                </div>
              </SplideSlide>
            </Splide>
          </div>
          <div className="w-full mt-12 h-16"></div>
        </div>
      </div>
    </>
  );
};
export default Podcasts;
