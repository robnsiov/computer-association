import Image from "@/components/share/image";
import statics from "@/constants/app";

const AboutUs = () => {
  return (
    <>
      <div
        style={{
          background: "linear-gradient(180deg, #0a101cb7 20%, #0b12206b 80%)",
        }}
        className="absolute inset-0 z-10 flex md:hidden"
      ></div>
      <div
        style={{
          background: "linear-gradient(180deg, #0a101c97 0%, #0b1220 100%)",
        }}
        className="absolute hidden md:block inset-4 rounded-2xl z-10"
      ></div>
      <div
        className="absolute inset-0 z-10 flex justify-end items-center flex-col
       text-white text-center p-8 dark:text-slate-400"
      >
        <h1 className="max-w-lg mb-6 md:text-4xl text-6xl font-extrabold leading-[1.3] md:leading-[1.35] sm:hidden">
          {statics.aboutTitle}
        </h1>
        <div className="max-w-2xl w-full text-lg sm:text-[13px]">
          {statics.aboutDesc}
        </div>
        <div className="mb-2 mt-2 md:mb-1">{statics.aboutDescFooter}</div>
        <div className="mb-1 bg-slate-600 inline mt-4 md:mb-1 text-center">
          پروژه دانشجویی اقایان ذوالفقاری و حسینی
        </div>
        <div className="mb-10 bg-slate-600 inline  mt-2 md:mb-1 text-center">
          با همکاری دکتر اقایی
        </div>
      </div>
      <div className="absolute inset-0 flex justify-center items-start">
        <div className="w-full h-full md:p-4">
          <Image
            src="/images/uni.jpg"
            width={2000}
            height={900}
            className="object-cover object-[10%_38%] w-full h-full md:rounded-2xl"
            alt="about-us"
          />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
