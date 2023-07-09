import Image from "@/components/share/image";
import Link from "@/components/share/link/link";
import { DocumentDownload, Eye, User, VideoSquare } from "iconsax-react";
import { BlogCard } from "./types";
import { Tooltip } from "@mantine/core";
import cx from "classnames";

const Blog = (props: BlogCard) => {
  const {
    article_user,
    count,
    image,
    article_category,
    title,
    edit,
    changeRouteWithCat,
    slug,
    editOperation = () => {},
    status,
    videos,
    video_file,
    name,
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
          <div
            className={cx(
              `w-full flex justify-between flex-row-reverse items-center`,
              { "mb-2": !videos }
            )}
          >
            <div className="flex justify-end items-center  w-[75%]  max-w-[75%]">
              {article_category && (
                <div
                  onClick={() => changeRouteWithCat(article_category.slug)}
                  className="text-slate-600 font-black   truncate
                hover:text-slate-400 dark:text-slate-500 dark:hover:text-slate-800 cursor-pointer"
                >
                  {article_category.name}
                </div>
              )}
            </div>
            {!videos && (
              <div className="flex flex-row-reverse justify-end items-center  max-w-[20%] group">
                {article_user && article_user.full_name && (
                  <div
                    className="bg-slate-100 text-slate-500 font-semibold shadow-md z-30 absolute 
                  top-[36px] text-[12px] rounded dark:bg-slate-600
                 right-[21px] dark:text-slate-400 flex justify-center items-center 
                 px-2 invisible opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:visible"
                  >
                    <span className="relative top-[1px]">
                      {article_user.full_name}
                    </span>
                  </div>
                )}

                <div className="min-w-[28px] max-w-[28px] aspect-square rounded-full overflow-hidden border-2 border-slate-500">
                  {article_user && (
                    <>
                      {article_user.image ? (
                        <Image
                          width={80}
                          height={80}
                          className="w-full h-full object-cover object-center"
                          src={article_user.image}
                          alt={article_user.image}
                        />
                      ) : (
                        <div
                          className="w-full h-full flex justify-center items-center 
                border-2 border-slate-200 rounded-full"
                        >
                          <User size="16" className="text-slate-300" />
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
          <div className="w-full aspect-video rounded-xl overflow-hidden">
            {videos && video_file ? (
              <>
                <div
                  onClick={() => onView(video_file)}
                  className="cursor-pointer w-full h-full group"
                >
                  <div className="flex justify-center items-center w-full h-full bg-slate-200 dark:bg-slate-600">
                    <VideoSquare
                      size={38}
                      className="text-slate-400 group-hover:text-slate-800"
                    />
                  </div>
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
          {name ?? title}
        </div>
        <div
          className="mt-2 w-full flex justify-between items-center bg-white dark:bg-slate-500 p-2 rounded-lg
         rounded-br-3xl rounded-bl-3xl"
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
              {videos && video_file ? (
                <>
                  <div
                    onClick={() => onView(video_file)}
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
                {videos && video_file ? (
                  <Link
                    noLoading={true}
                    href={video_file}
                    download={true}
                    target="_blank"
                  >
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
