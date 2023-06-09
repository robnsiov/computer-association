"use client";

import Skeleton from "@/components/share/skeleton/skeleton";
import { AnimatePresence, motion } from "framer-motion";
import useEvents from "./use-events";
import Image from "@/components/share/image";
import Link from "@/components/share/link/link";
import Spinner from "@/components/share/spinner/spinner";
import EventsImpl from "./types";

const Events = ({ journal = false }: EventsImpl) => {
  const {
    events,
    initEvents,
    participateOnEvent,
    participateLoading,
    dataLoading,
  } = useEvents({ journal });
  return (
    <>
      {events.length === 0 && !initEvents && dataLoading && (
        <div className="w-full h-full text-slate-500 flex justify-center items-center">
          <p className="text-lg">آیتمی برای نمایش وجود ندارد</p>
        </div>
      )}
      <div
        className="pl-4 pr-2 py-2 overflow-y-scroll scrollbar dark:dark-scrollbar h-full grid grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 
      md:grid-cols-2 580px:grid-cols-1  gap-5 auto-rows-min	"
      >
        {initEvents && (
          <>
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="relative h-[282px]">
                <div
                  className="absolute inset-0 z-10 rounded-3xl overflow-hidden
                   bg-white dark:bg-slate-500 p-2 flex justify-between items-center flex-col"
                >
                  <div className="w-full h-[165px] rounded-2xl overflow-hidden">
                    <Skeleton />
                  </div>
                  <div className="w-full h-[30px] rounded-2xl overflow-hidden">
                    <Skeleton />
                  </div>
                  <div className="w-full h-[60px] rounded-2xl overflow-hidden">
                    <Skeleton />
                  </div>
                </div>
              </div>
            ))}
          </>
        )}

        <AnimatePresence>
          {events.map(({ image, slug, title, is_active, id, src }) => (
            <motion.div
              key={slug}
              layout
              className="w-full relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div
                className="bg-slate-100 dark:bg-slate-600  rounded-3xl flex justify-center items-center
      ring-4 ring-white dark:ring-slate-400 dark:hover:ring-slate-500 p-2 flex-col transition-all duration-200 hover:bg-white dark:hover:bg-slate-700
      hover:ring-slate-100"
              >
                <div className="relative dark:bg-slate-700 w-full bg-white rounded-2xl flex justify-center items-center flex-col p-2">
                  <div className="w-full h-[150px] rounded-xl overflow-hidden">
                    <Link
                      href={journal && src ? src : `/events/${slug}`}
                      download={journal}
                      noLoading={journal}
                      target={journal ? "_blank" : "_self"}
                    >
                      <Image
                        width={300}
                        height={200}
                        className="w-full h-full object-cover object-center"
                        src={image}
                        alt={title}
                      />
                    </Link>
                  </div>
                  <span className="absolute -bottom-2.5 blur-xl left-0 right-0 h-6 bg-slate-200"></span>
                </div>
                <div className="mt-2 px-2 w-full text-right dark:text-slate-900 text-slate-500 max-w-full truncate">
                  {title}
                </div>
                <div
                  className="mt-2 w-full flex justify-between items-center bg-white dark:bg-slate-500 p-2 rounded-lg
                    rounded-bl-3xl rounded-br-3xl"
                >
                  {journal && src ? (
                    <>
                      <Link
                        href={src}
                        download={true}
                        noLoading={true}
                        target="_blank"
                        className="bg-slate-800 text-white w-full p-3 text-sm rounded-lg 
            rounded-br-3xl rounded-bl-3xl text-center hover:ring-[3px] hover:ring-slate-400 transition-all duration-200
            cursor-pointer font-semibold flex justify-center items-center h-[44px]"
                      >
                        مشاهده
                      </Link>
                    </>
                  ) : (
                    <>
                      {!is_active ? (
                        <div
                          className="bg-slate-300 dark:opacity-25 text-white w-full p-3 text-sm rounded-lg 
            rounded-br-3xl rounded-bl-3xl text-center hover:ring-[3px] hover:ring-slate-100 transition-all duration-200
            cursor-not-allowed font-semibold"
                        >
                          منقضی شده است
                        </div>
                      ) : (
                        <div
                          onClick={() => participateOnEvent(id)}
                          className="bg-slate-800 text-white w-full p-3 text-sm rounded-lg 
            rounded-br-3xl rounded-bl-3xl text-center hover:ring-[3px] hover:ring-slate-400 transition-all duration-200
            cursor-pointer font-semibold flex justify-center items-center h-[44px]"
                        >
                          {participateLoading === id ? (
                            <Spinner />
                          ) : (
                            "شرکت در رویداد"
                          )}
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </>
  );
};
export default Events;
