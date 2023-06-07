"use client";

import Skeleton from "@/components/share/skeleton/skeleton";
import Blog from "../../share/cards/blog/blog";
import useBlogs from "./use-blogs";
import { AnimatePresence, motion } from "framer-motion";
import BlogsImpl from "./types";
import cx from "classnames";

const Blogs = ({
  edit = false,
  home = false,
  videos = false,
  editOperation = () => {},
  onView = () => {},
}: BlogsImpl) => {
  const { blogs, initBlogs, changeRouteWithCat } = useBlogs({
    edit,
    home,
    videos,
  });
  return (
    <>
      <div
        className={cx(
          `pl-4 pr-2 py-2 h-full grid gap-5 auto-rows-min`,
          {
            "grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 580px:grid-cols-1 overflow-y-auto scrollbar":
              !home,
          },
          {
            "grid-cols-3 xl:grid-cols-2 sm:grid-cols-1": home,
          }
        )}
      >
        {initBlogs && (
          <>
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="relative h-[327px]">
                <div
                  className="absolute inset-0 z-10 rounded-3xl overflow-hidden
                   bg-white p-2 flex justify-between items-center flex-col"
                >
                  <div className="w-full h-[202px] rounded-2xl overflow-hidden">
                    <Skeleton />
                  </div>
                  <div className="w-full h-[25px] rounded-2xl overflow-hidden">
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
          {blogs.map(
            ({
              article_user,
              count,
              image,
              title,
              article_category,
              slug,
              status,
            }) => (
              <motion.div
                key={title}
                layout
                className="w-full relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Blog
                  slug={slug}
                  image={image}
                  title={title}
                  edit={edit}
                  article_user={article_user}
                  count={count}
                  article_category={article_category}
                  changeRouteWithCat={changeRouteWithCat}
                  editOperation={editOperation}
                  status={status}
                  videos={videos}
                  onView={onView}
                />
              </motion.div>
            )
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Blogs;
