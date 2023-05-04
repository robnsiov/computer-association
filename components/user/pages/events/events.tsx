"use client";

import Skeleton from "@/components/share/skeleton/skeleton";
import Blog from "../../share/cards/blog/blog";
import { AnimatePresence, motion } from "framer-motion";
import useEvents from "./use-events";
import Image from "@/components/share/image";
import Link from "@/components/share/link/link";
import Spinner from "@/components/share/spinner/spinner";

const Events = () => {
  const { events, initEvents, participateOnEvent, participateLoading } =
    useEvents();
  return (
    <>
      <div
        className="pl-4 pr-2 py-2 overflow-y-scroll scrollbar h-full grid grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 
      md:grid-cols-2 580px:grid-cols-1  gap-5 auto-rows-min	"
      >
        {initEvents && (
          <>
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="relative h-[282px]">
                <div
                  className="absolute inset-0 z-10 rounded-3xl overflow-hidden
                   bg-white p-2 flex justify-between items-center flex-col"
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
          {events.map(({ image, slug, title, id, expire }) => (
            <motion.div
              key={id}
              layout
              className="w-full relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div
                className=" bg-slate-100 rounded-3xl flex justify-center items-center
                    ring-4 ring-white p-2 flex-col transition-all duration-200 hover:bg-white
                    hover:ring-slate-100"
              >
                <div className="relative w-full bg-white rounded-2xl flex justify-center items-center flex-col p-2">
                  <div className="w-full h-[150px] rounded-xl overflow-hidden">
                    <Link href={`/events/${slug}`}>
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
                <div className="mt-2 px-2 w-full text-right text-slate-500 max-w-full truncate">
                  {title}
                </div>
                <div
                  className="mt-2 w-full flex justify-between items-center bg-white p-2 rounded-lg
                    rounded-bl-3xl rounded-br-3xl"
                >
                  {}

                  {expire ? (
                    <div
                      className="bg-slate-300 text-white w-full p-3 text-sm rounded-lg 
            rounded-br-3xl text-center hover:ring-[3px] hover:ring-slate-100 transition-all duration-200
            cursor-not-allowed font-semibold"
                    >
                      منقضی شده است
                    </div>
                  ) : (
                    <div
                      onClick={() => participateOnEvent(id)}
                      className="bg-slate-800 text-white w-full p-3 text-sm rounded-lg 
            rounded-br-3xl text-center hover:ring-[3px] hover:ring-slate-400 transition-all duration-200
            cursor-pointer font-semibold flex justify-center items-center h-[44px]"
                    >
                      {participateLoading === id ? (
                        <Spinner />
                      ) : (
                        "شرکت در رویداد"
                      )}
                    </div>
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
