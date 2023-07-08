"use client";

import Link from "@/components/share/link/link";
import { Calendar } from "iconsax-react";
import useLatestEvent from "./use-latest-event";
import clx from "classnames";

const LatestEvent = () => {
  const { data, isSuccess } = useLatestEvent();
  return (
    <>
      <div
        className={clx(
          `flex justify-center items-center 
        absolute top-0 left-1/2 -translate-x-1/2 bg-slate-200 py-1 px-4 rounded-xl 
        border-2 border-slate-300 border-dashed dark:border-slate-400
        hover:border-slate-400 hover:border-solid dark:bg-slate-400
        hover:scale-[1.01] transition-all duration-200 hover:shadow-md opacity-0 lg:hidden`,
          { "opacity-100  top-4": data?.data.title && isSuccess }
        )}
      >
        <Link href={`/events/${data?.data.slug}`}>
          <span className="text-slate-600 font-extrabold ml-1">
            رویداد در حال برگزاری :
          </span>
          <span className="text-slate-400 dark:text-slate-600">
            {data?.data.title} <Calendar className="inline-block" />
          </span>
        </Link>
      </div>
    </>
  );
};
export default LatestEvent;
