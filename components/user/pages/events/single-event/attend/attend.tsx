"use client";

import Spinner from "@/components/share/spinner/spinner";
import AttendOnEvent from "./types";
import useAttend from "./use-attend";

const AttendOnEvent = ({ id }: AttendOnEvent) => {
  const { participateLoading, participateOnEvent } = useAttend();
  return (
    <>
      <span
        onClick={() => participateOnEvent(id)}
        className="absolute top-7 -left-12 w-[200px]
             text-center dark:bg-slate-600 dark:text-slate-400  bg-white px-3 h-12 -rotate-45 cursor-pointer flex justify-center items-center"
      >
        {participateLoading ? (
          <Spinner color="text-slate-600" />
        ) : (
          "شرکت در رویداد"
        )}
      </span>
    </>
  );
};
export default AttendOnEvent;
