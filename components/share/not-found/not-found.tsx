import Link from "../link/link";

const NotFound = () => {
  return (
    <>
      <div className="w-full h-full flex justify-center items-center flex-col text-center">
        <div className="text-[400px] md:text-[300px] 460px:text-[200px] dark:grayscale">
          ☹️
        </div>
        <p className="text-slate-500 font-extrabold text-3xl md:-mt-24 460px:-mt-16 460px:text-2xl -mt-36">
          صفحه مورد نظر پیدا نشد :(
        </p>
        <Link
          className="text-slate-500 border-b-2 border-slate-500 mt-3 hover:text-slate-700"
          href="/"
        >
          رفتن به صفحه اصلی
        </Link>
      </div>
    </>
  );
};
export default NotFound;
