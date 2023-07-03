import Image from "@/components/share/image";
import Link from "@/components/share/link/link";
import { DocumentDownload, Eye, User } from "iconsax-react";
import { BlogCard } from "./types";
import { Tooltip } from "@mantine/core";

const Blog = (props: BlogCard) => {
  const {
    article_user: { full_name, image: userImage },
    count,
    image,
    article_category: { slug: userSlug, name: category },
    title,
    edit,
    changeRouteWithCat,
    slug,
    editOperation = () => {},
    status,
    videos,
    onView = () => {},
  } = props;
  return (
    <>
      <div
        className="bg-slate-100 dark:bg-slate-600  rounded-3xl flex justify-center items-center
      ring-4 ring-white dark:ring-slate-400 dark:hover:ring-slate-500 p-2 flex-col transition-all duration-200 hover:bg-white dark:hover:bg-slate-700
      hover:ring-slate-100"
      >
        <div className="relative w-full bg-white dark:bg-slate-700  rounded-2xl flex justify-center items-center flex-col p-2">
          <div className="w-full flex justify-between flex-row-reverse items-center mb-2">
            <div className="flex justify-end items-center  w-[75%]  max-w-[75%]">
              <div
                onClick={() => changeRouteWithCat(userSlug)}
                className="text-slate-600 font-black   truncate
                hover:text-slate-400 dark:text-slate-500 dark:hover:text-slate-800 cursor-pointer"
              >
                {category}
              </div>
            </div>
            <div className="flex flex-row-reverse justify-end items-center  max-w-[20%]">
              <div className="flex justify-start items-start flex-col "></div>
              <div className="min-w-[28px] max-w-[28px] aspect-square rounded-full overflow-hidden border-2 border-slate-500">
                {userImage ? (
                  <Image
                    width={80}
                    height={80}
                    className="w-full h-full object-cover object-center"
                    src={userImage}
                    alt={full_name}
                  />
                ) : (
                  <div
                    className="w-full h-full flex justify-center items-center 
                border-2 border-slate-200 rounded-full"
                  >
                    <User size="16" className="text-slate-300" />
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="w-full aspect-video rounded-xl overflow-hidden">
            {videos ? (
              <>
                <div onClick={() => onView("src")} className="cursor-pointer">
                  <Image
                    width={600}
                    height={600}
                    className="w-full h-full object-cover object-center"
                    src={image}
                    alt={title}
                  />
                </div>
              </>
            ) : (
              <Link href={`/blogs/${slug}`}>
                <Image
                  width={300}
                  height={200}
                  className="w-full h-full object-cover object-center"
                  src={image}
                  alt={title}
                />
              </Link>
            )}
          </div>
          <span className="absolute -bottom-2.5 blur-xl left-0 right-0 h-6 bg-slate-200"></span>
        </div>
        <div className="mt-2 px-2 w-full text-right text-slate-500 dark:text-slate-900 max-w-full truncate">
          {title}
        </div>
        <div
          className="mt-2 w-full flex justify-between items-center bg-white dark:bg-slate-500 p-2 rounded-lg
        rounded-bl-3xl rounded-br-3xl rounded-bl-3xl"
        >
          {edit ? (
            <div
              onClick={() => editOperation(props)}
              className="bg-slate-800 text-white w-[60%] p-3 text-sm rounded-lg 
            rounded-br-3xl rounded-bl-3xl text-center hover:ring-[3px] hover:ring-slate-400 
            transition-all duration-200 cursor-pointer"
            >
              ویرایش
            </div>
          ) : (
            <>
              {videos ? (
                <>
                  <div
                    onClick={() => onView("src")}
                    className="bg-slate-800 text-white w-[60%] p-3 text-sm rounded-lg 
            rounded-br-3xl rounded-bl-3xl text-center hover:ring-[3px] hover:ring-slate-400 
            transition-all duration-200 cursor-pointer"
                  >
                    مشاهده
                  </div>
                </>
              ) : (
                <Link
                  className="bg-slate-800  text-white w-[60%] p-3 text-sm rounded-lg 
            rounded-br-3xl rounded-bl-3xl text-center hover:ring-[3px] hover:ring-slate-400 transition-all duration-200"
                  href={`/blogs/${slug}`}
                >
                  مطالعه
                </Link>
              )}
            </>
          )}

          <div className="flex justify-start items-center">
            {edit ? (
              <>
                <div className="text-[12px] font-bold">
                  {status === "p" && (
                    <span className="text-green-500">تایید شده</span>
                  )}
                  {status === "d" && (
                    <span className="text-slate-300">در انتظار تایید</span>
                  )}
                  {status === "t" && (
                    <span className="text-red-500">رد شده</span>
                  )}
                </div>
              </>
            ) : (
              <>
                {videos ? (
                  <Link href={"/"} download={true} target="_blank">
                    <DocumentDownload className="hover:text-slate-400 transition-all duration-200" />
                  </Link>
                ) : (
                  <>
                    <span className="ml-2">{count}</span>
                    <Eye size="18" />
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default Blog;
