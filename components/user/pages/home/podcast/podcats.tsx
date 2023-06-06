"use client";
import Link from "@/components/share/link/link";
import usePodcast from "./use-podcast";
import { PlayCircle } from "iconsax-react";
import Image from "@/components/share/image";
import Skeleton from "@/components/share/skeleton/skeleton";

const Podcast = () => {
  const { data, isSuccess } = usePodcast();
  console.log(data && isSuccess);
  return (
    <>
      <div className="relative w-[200px] h-[200px] rounded-full flex justify-center items-center overflow-hidden">
        <div className="w-[450px] h-[450px] absolute animate-spin-slow">
          <Image
            alt="ring"
            width={450}
            height={450}
            className="object-cover object-center"
            src="/images/ring.png"
          />
        </div>
        <div className="absolute w-[70px] h-[70px] bg-slate-300 rounded-full animate-ping"></div>
        <Link
          href={`${data ? `/podcast?id=` + data.id : `/podcast`}`}
          className="absolute w-[90px] h-[90px] bg-slate-500 rounded-full flex justify-center items-center z-10"
        >
          <PlayCircle size="42" className="text-sky-300" />
        </Link>

        <div className="w-[450px] h-[450px] absolute animate-spin-slower">
          <Image
            alt="ring"
            width={450}
            height={450}
            className="object-cover object-center"
            src="/images/ring.png"
          />
        </div>
      </div>
      <div className="flex w-full justify-center items-center flex-col text-center mt-4 max-w-[350px]">
        {data ? (
          <>
            <h1 className="font-extrabold text-3xl mb-5">{data?.title}</h1>
            <p className="text-slate-400">{data?.description}</p>
          </>
        ) : (
          <>
            <div className="w-full h-[36px] rounded-md overflow-hidden mb-5">
              <Skeleton />
            </div>
            {/* <div className="w-1/2 h-[36px] rounded-md overflow-hidden mt-2 mb-3">
              <Skeleton />
            </div> */}
            <div className="w-full h-[20px] mb-1 rounded-md overflow-hidden">
              <Skeleton />
            </div>
            <div className="w-full h-[20px] mb-1 rounded-md overflow-hidden">
              <Skeleton />
            </div>
            <div className="w-full h-[20px] mb-1 rounded-md overflow-hidden">
              <Skeleton />
            </div>
            <div className="w-1/2 h-[20px] mb-1 rounded-md overflow-hidden">
              <Skeleton />
            </div>
          </>
        )}
      </div>
    </>
  );
};
export default Podcast;
