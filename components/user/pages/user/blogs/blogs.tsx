"use client";
import Blgs from "../../blogs/blogs";
import useBlogs from "./use-blogs";

const Blogs = () => {
  const { goToEdit } = useBlogs();
  return (
    <>
      <Blgs edit={true} editOperation={goToEdit} />
    </>
  );
};
export default Blogs;
