"use client";

import Skeleton from "@/components/share/skeleton/skeleton";
import Blog from "../../share/cards/blog/blog";
import useBlogs from "./use-blogs";
import { AnimatePresence, motion } from "framer-motion";

const Blogs = () => {
  const { blogs, initBlogs } = useBlogs();
  return (
    <>
      <div
        className="pl-4 pr-2 py-2 overflow-y-scroll scrollbar h-full grid grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 
      md:grid-cols-2 580px:grid-cols-1  gap-5 auto-rows-min	"
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
              id,
              author,
              authorImage,
              category,
              categoryLink,
              href,
              image,
              title,
              view,
            }) => (
              <motion.div
                key={id}
                layout
                className="w-full relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Blog
                  author={author}
                  authorImage={authorImage}
                  image={image}
                  category={category}
                  href={href}
                  title={title}
                  view={view}
                  categoryLink={categoryLink}
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
