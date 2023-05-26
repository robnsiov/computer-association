import Image from "@/components/share/image";
import Blog from "../../share/cards/blog/blog";
import { PlayCircle } from "iconsax-react";
import Link from "@/components/share/link/link";

const Home = () => {
  return (
    <>
      <div
        className="w-full h-full flex justify-between items-center px-5 pb-0 
      lg:flex-col lg:justify-start lg:items-start lg:overflow-auto lg:scrollbar"
      >
        <div
          className="w-[60%] lg:w-full h-full flex justify-start items-start flex-col overflow-hidden -mb-10
        lg:overflow-unset lg:h-[unset] lg:mb-[unset] lg:order-1"
        >
          <h1 className="font-black text-4xl mb-4 lg:hidden">برترین مقالات</h1>
          <div
            className="w-full h-full grid grid-cols-3  gap-5 auto-rows-min p-2
          xl:grid-cols-2 sm:grid-cols-1"
          >
            <Blog
              author={"حسینی"}
              authorImage={"/images/el.jpg"}
              image={"/images/el.jpg"}
              category={"شبکه"}
              href={"/"}
              title={"چگونه شبکه را مدیریت کنیم"}
              view={500}
              categoryLink={"/"}
            />
            <Blog
              author={"حسینی"}
              authorImage={"/images/el.jpg"}
              image={"/images/el.jpg"}
              category={"شبکه"}
              href={"/"}
              title={"چگونه شبکه را مدیریت کنیم"}
              view={500}
              categoryLink={"/"}
            />
            <Blog
              author={"حسینی"}
              authorImage={"/images/el.jpg"}
              image={"/images/el.jpg"}
              category={"شبکه"}
              href={"/"}
              title={"چگونه شبکه را مدیریت کنیم"}
              view={500}
              categoryLink={"/"}
            />
            <Blog
              author={"حسینی"}
              authorImage={"/images/el.jpg"}
              image={"/images/el.jpg"}
              category={"شبکه"}
              href={"/"}
              title={"چگونه شبکه را مدیریت کنیم"}
              view={500}
              categoryLink={"/"}
            />
            <Blog
              author={"حسینی"}
              authorImage={"/images/el.jpg"}
              image={"/images/el.jpg"}
              category={"شبکه"}
              href={"/"}
              title={"چگونه شبکه را مدیریت کنیم"}
              view={500}
              categoryLink={"/"}
            />
            <Blog
              author={"حسینی"}
              authorImage={"/images/el.jpg"}
              image={"/images/el.jpg"}
              category={"شبکه"}
              href={"/"}
              title={"چگونه شبکه را مدیریت کنیم"}
              view={500}
              categoryLink={"/"}
            />
          </div>
        </div>
        <div
          className="w-[40%] flex justify-center items-center flex-col mr-4
        lg:w-full lg:mr-0 lg:mb-5"
        >
          <div className="relative w-[200px] h-[200px] flex justify-center items-center overflow-hidden">
            <div className="w-[450px] h-[450px] absolute animate-spin-slow">
              <Image
                alt="ring"
                width={450}
                height={450}
                className="object-cover object-center"
                src="/images/ring.png"
              />
            </div>
            <div className="absolute w-[70px] h-[70px] bg-slate-300 rounded-full animate-ping"></div>
            <Link
              href={"/poscats"}
              className="absolute w-[90px] h-[90px] bg-slate-500 rounded-full flex justify-center items-center z-10"
            >
              <PlayCircle size="42" className="text-sky-300" />
            </Link>

            <div className="w-[450px] h-[450px] absolute animate-spin-slower">
              <Image
                alt="ring"
                width={450}
                height={450}
                className="object-cover object-center"
                src="/images/ring.png"
              />
            </div>
          </div>
          <div className="flex justify-center items-center flex-col text-center mt-4 max-w-[350px]">
            <h1 className="font-extrabold text-3xl mb-3">
              لورم ایپسوم متن ساختگی با تولید سادگی{" "}
            </h1>
            <p className="text-slate-400">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
