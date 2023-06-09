// @ts-nocheck
"use client";
import Image from "@/components/share/image";
import Link from "@/components/share/link/link";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import { Tooltip } from "@mantine/core";

import {
  ArrowLeft3,
  ArrowRight3,
  Danger,
  Edit,
  FolderOpen,
  Gallery,
  Microphone2,
  Play,
  Sound,
} from "iconsax-react";
import { useRef } from "react";
import Player from "./player/player";
import usePodcasts from "./use-podcasts";
import FadeAnimation from "@/components/share/fade-animation/fade-animation";
import { Podcast } from "@/context/selected-podcats/types";
import Spinner from "@/components/share/spinner/spinner";
import Modal from "@/components/share/modal/modal";
import Comments from "../../share/comments/commnets";

const Podcasts = () => {
  const ref = useRef({ go(dir: string) {} });
  const goPrev = () => {
    ref.current.go("<");
  };
  const goNext = () => {
    ref.current.go(">");
  };

  const {
    data,
    isSuccess,
    podcast,
    isError,
    isLoading,
    played,
    setPlayed,
    showModal,
    toggleShowModal,
  } = usePodcasts();
  return (
    <>
      <Modal inProp={showModal} setProp={toggleShowModal}>
        <Comments
          onConfirm={toggleShowModal}
          slug={podcast.slug}
          type="PODCAST"
          title={podcast.title}
        />
      </Modal>
      <FadeAnimation inProp={isError || isLoading || data?.data.length === 0}>
        <div className="absolute inset-0 flex justify-center items-center flex-col text-center z-30">
          <FadeAnimation
            inProp={data?.data.length === 0}
            className="flex justify-center items-center flex-col"
          >
            <Sound size="78" />
            <span className="mt-3">آیتمی برای نمایش وجود ندارد</span>
          </FadeAnimation>
          <FadeAnimation
            inProp={isError}
            className="flex justify-center items-center flex-col"
          >
            <Danger size="78" />
            <span className="mt-3">
              مشکلی در بارگزاری پادکست ها رخ داده است
            </span>
          </FadeAnimation>
          <FadeAnimation
            inProp={isLoading}
            className="flex justify-center items-center flex-col"
          >
            <div className="scale-150">
              <Spinner color="text-slate-700" />
            </div>
          </FadeAnimation>
        </div>
      </FadeAnimation>
      <FadeAnimation
        inProp={isSuccess && data?.data.length !== 0}
        className="w-full h-full"
      >
        <div className="absolute top-0 left-0 right-0 h-[70%]">
          <div className="absolute inset-0 backdrop-blur-sm z-10"></div>

          <Image
            src={podcast.image}
            width={1000}
            height={600}
            alt="podcast"
            className=" w-full h-full object-cover 
        object-top"
          />

          <span
            className="absolute inset-0 z-10"
            style={{
              background: "linear-gradient(180deg, #0b122020 0%, #0B1220 100%)",
            }}
          ></span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-[#0B1220]"></div>
        <div className="absolute inset-0 z-10 flex justify-end items-end flex-col">
          <div className="flex w-full h-full justify-center  lg:flex-col p-9 pb-0">
            <div
              className="w-1/2 flex justify-center items-start flex-col
          lg:w-full lg:justify-center lg:text-center lg:items-center lg:max-w-2xl lg:mx-auto lg:mb-4"
            >
              <h1
                className="font-extrabold text-4xl leading-[1.3] text-slate-50 w-full truncate 
            md:text-3xl max-w-[530px]"
              >
                {podcast.title}
              </h1>
              <span className="text-slate-200 mt-4 three-line-truncate max-w-[530px]">
                {podcast.description}
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
          flex justify-center items-start flex-col pr-24 space-y-3
          lg:flex-row lg:flex-wrap 
          lg:space-y-0 lg:min-h-[unset] lg:gap-5 lg:w-full lg:mb-6 lg:items-center lg:pr-0"
            >
              <div className="flex justify-center items-center">
                <Tooltip label="گوینده" color="#414856" position="top">
                  <Microphone2 className="text-slate-300 ml-2" />
                </Tooltip>
                <span className="text-slate-200">{podcast.speaker}</span>
              </div>
              <div className="flex justify-center items-center">
                <Tooltip
                  label="جمع آوری اطلاعات"
                  color="#414856"
                  position="top"
                >
                  <FolderOpen className="text-slate-300 ml-2" />
                </Tooltip>
                <span className="text-slate-200">{podcast.data_collector}</span>
              </div>
              <div className="flex justify-center items-center">
                <Tooltip label="ویرایش متن" color="#414856" position="top">
                  <Edit className="text-slate-300 ml-2" />
                </Tooltip>
                <span className="text-slate-200">{podcast.text_editor}</span>
              </div>
              <div className="flex justify-center items-center">
                <Tooltip label="طراح پوستر" color="#414856" position="top">
                  <Gallery className="text-slate-300 ml-2" />
                </Tooltip>
                <span className="text-slate-200">
                  {podcast.graphic_designer}
                </span>
              </div>
            </div>
          </div>
          <div className="w-full h-[55%] lg:h-[45%] flex justify-center items-center flex-col">
            <div className="flex w-full justify-start items-center mb-1  cursor-pointer pr-9">
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
                  direction: "rtl",
                  arrows: false,
                  autoWidth: true,
                  pagination: false,
                  perMove: 1,
                }}
              >
                {data?.data.map(({ id, image, title, speaker }) => (
                  <SplideSlide
                    key={id}
                    className="p-3 max-w-[140px] md:max-w-[120px]"
                    onClick={() => setPlayed(true)}
                  >
                    <Link
                      href={{ pathname: "/podcasts", query: { id } }}
                      className="w-full flex justify-center items-center text-center"
                    >
                      <div className="w-full aspect-square relative">
                        <div className="rounded-full overflow-hidden w-full h-full">
                          <Image
                            src={image}
                            width={200}
                            height={200}
                            className="w-full h-full object-cover object-center "
                            alt={title}
                          />
                        </div>
                        <FadeAnimation inProp={id === podcast.id && played}>
                          <div
                            className="absolute top-0 left-0 w-full aspect-square
                   bg-slate-900/60 rounded-full ring-2 ring-slate-600 
                   flex justify-center items-center"
                          >
                            <div className="flex justify-center items-center">
                              <div className="scale-x-125 flex justify-center items-center">
                                <span className="w-0.5 h-7 border-r-2 border-slate-600  mx-[1px] animate-[wave_1s_1.25s_ease-in-out_infinite]"></span>
                                <span className="w-0.5 h-7 border-r-2 border-slate-600  mx-[1px] animate-[wave_1s_0.5s_ease-in-out_infinite]"></span>
                                <span className="w-0.5 h-7 border-r-2 border-slate-600  mx-[1px] animate-[wave_1s_0.25s_ease-in-out_infinite]"></span>
                                <span className="w-0.5 h-7 border-r-2 border-slate-600  mx-[1px] animate-[wave_1s_1.25s_ease-in-out_infinite]"></span>
                                <span className="w-0.5 h-7 border-r-2 border-slate-600  mx-[1px] animate-[wave_1s_0s_ease-in-out_infinite]"></span>
                              </div>
                            </div>
                          </div>
                        </FadeAnimation>
                        <h2 className="w-full truncate text-slate-100 mt-3 font-extrabold">
                          {title}
                        </h2>
                        <span className="w-full truncate  text-slate-400 mt-1 text-[13px] font-extralight lg:hidden">
                          {speaker}
                        </span>
                      </div>
                    </Link>
                  </SplideSlide>
                ))}
              </Splide>
            </div>
            <div
              className="text-slate-100 w-full flex justify-start items-start pr-10 mt-3 
            text-sm"
            >
              <span
                onClick={toggleShowModal}
                className=" hover:text-slate-400 cursor-pointer"
              >
                مشاهده کامنت ها
              </span>
            </div>
            <div className="w-full mt-4 lg:mt-2  flex justify-center items-center">
              <Player
                played={played}
                setPlayed={setPlayed}
                selectedPod={podcast}
                podcasts={data?.data as Array<Podcast>}
              />
            </div>
          </div>
        </div>
      </FadeAnimation>
    </>
  );
};
export default Podcasts;
