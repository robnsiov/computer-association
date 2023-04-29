import { Home } from "iconsax-react";
import Link from "../link/link";

const NotFound = () => {
  return (
    <>
      <div className="w-full h-full flex justify-center items-center flex-col text-center">
        <div className="text-[400px] md:text-[300px] 460px:text-[200px]">
          ☹️
        </div>
        <p className="text-primary font-extrabold text-3xl md:-mt-24 460px:-mt-16 460px:text-2xl -mt-36">
          صفحه مورد نظر پیدا نشد :(
        </p>
        <Link className="text-primary border-b-2 border-primary mt-3" href="/">
          رفتن به صفحه اصلی
        </Link>
      </div>
    </>
  );
};
export default NotFound;
