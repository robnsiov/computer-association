import Image from "next/image";
import Blogs from "../blogs/blogs";
import LatestEvent from "./latest-event/latest-event";
import Podcast from "./podcast/podcats";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <div
        className="w-full h-full flex justify-between items-center px-5 pb-0 
      lg:flex-col lg:justify-start lg:items-start lg:overflow-auto lg:scrollbar dark:lg:dark-scrollbar md:p-1 relative"
      >
        <div className="absolute z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:hidden">
          <Link
            className="bg-slate-600 py-0.5 px-3 text-white rounded"
            href={"/blogs"}
          >
            برو به صفحه مقالات
          </Link>
        </div>
        <div
          className="w-[60%] lg:w-full h-full flex justify-between items-start flex-col overflow-hidden -mb-10
        lg:overflow-unset lg:h-[unset] lg:mb-[unset] lg:order-1"
        >
          <div>
            <h1 className="font-black bg-slate-700 text-white inline-flex text-4xl mb-8 dark:text-slate-500 p-3">
              آخرین اطلاعیه ها
            </h1>
            <LatestEvent />
          </div>
          <div className="flex justify-start items-start flex-wrap w-full mt-10 mb-6">
            <Image
              src={"/images/logo.png"}
              width={150}
              height={150}
              alt="logo"
              className="bg-slate-400 p-3 rounded-md sm:scale-75"
            />
            <div className="mr-6  bg-slate-400 p-3 rounded-md sm:scale-75 sm:mr-0">
              <Image
                src={"/images/logoo.png"}
                width={135}
                height={135}
                alt="logo"
              />
              <span className="w-full block text-center text-white">
                انجمن کامپیوتر
              </span>
            </div>
          </div>
          {/* <div className="w-full h-full">
            <Blogs home={true} />
          </div> */}
        </div>
        <div
          className="w-[40%] flex justify-center items-center flex-col mr-4
        lg:w-full lg:mr-0 lg:mb-5"
        >
          <Podcast />
        </div>
      </div>
    </>
  );
};
export default Home;
