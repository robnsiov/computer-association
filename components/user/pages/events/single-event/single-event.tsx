import Image from "@/components/share/image";
import PageWait from "@/components/user/share/page-wait/page-wait";
import Markdown from "@/components/user/share/markdown/markdown";
import { api } from "@/constants/api";
import { notFound } from "next/navigation";
import SingleEventImpl, { SingleEventApi } from "./types";
import { Suspense } from "react";
import toJalali from "@/utils/to-jalali/to-jalali";
import AttendOnEvent from "./attend/attend";

export const singleEvent = async (slug: string) => {
  try {
    const res = await fetch(`${api.baseURL}${api.singleEvent}${slug}/`);
    if (!res.ok) return notFound();
    const result: SingleEventApi = await res.json();
    return result;
  } catch {
    notFound();
  }
};

const SingleEvent = async ({ slug }: SingleEventImpl) => {
  const event = await singleEvent(slug);
  return (
    <>
      <div className="w-full  h-full scrollbar dark:dark-scrollbar overflow-y-auto pl-3">
        <Suspense fallback={<PageWait />}>
          <article className="w-full max-w-xl mx-auto flex justify-start items-center flex-col mt-3">
            <h1 className="font-black text-5xl md:text-4xl text-center md:leading-[1.3] leading-[1.2] mb-6 dark:text-slate-400">
              {event.title}
            </h1>
            <div className="w-full min-h-[300px] sm:min-h-[150px] rounded-2xl h-auto relative overflow-hidden">
              <Image
                className="w-full h-auto object-cover rounded-xl overflow-hidden"
                src={event.image}
                width={600}
                height={1500}
                alt={event.title}
              />
              <AttendOnEvent id={event.id} />
            </div>
            <div className="dark:text-slate-400 w-full max-w-[350px] text-center mt-4 flex justify-start items-center flex-col space-y-2 p-4 ">
              <div>
                <span className="font-bold">مهلت ثبت نام : </span>
                <span className="mr-2">{toJalali(new Date(event.date))}</span>
              </div>
              <div>
                <span className="font-bold">محل برگزاری : </span>
                <span className="mr-2">{event.place}</span>
              </div>
              <div>
                <span className="font-bold">ارایه شده توسط : </span>
                <span className="mr-2">{event.provider}</span>
              </div>
            </div>
            <div className="w-full mt-8">
              <div className="w-full markdown-body dark:text-slate-400">
                <Markdown markdown={event.content} />
              </div>
            </div>
          </article>
        </Suspense>
      </div>
    </>
  );
};
export default SingleEvent;
