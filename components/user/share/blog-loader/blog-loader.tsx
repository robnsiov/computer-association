import Spinner from "@/components/share/spinner/spinner";

const BlogLoader = () => {
  return (
    <>
      <div
        className="w-full absolute inset-0 bg-white/70 z-50
        flex justify-center items-center"
      >
        <div
          className="w-[100px] aspect-square  rounded-md 
          flex justify-center items-center bg-white"
        >
          <div className="scale-150">
            <Spinner color="text-slate-600" />
          </div>
        </div>
      </div>
    </>
  );
};
export default BlogLoader;
