import { qu } from "@/components/share/container/query-client/query-client";
import BlogCardImpl from "@/components/user/share/cards/blog/types";
import { useRouter } from "next/navigation";

const useBlogs = () => {
  const router = useRouter();
  const goToEdit = (blog: BlogCardImpl) => {
    qu.invalidateQueries(["user-blog"]);
    qu.setQueryData(["user-blog"], blog);
    router.push("/user/blogs/write?edit=true");
  };
  return { goToEdit };
};
export default useBlogs;
