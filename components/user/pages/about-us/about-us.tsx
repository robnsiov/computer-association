import Image from "@/components/share/image";
import statics from "@/constants/app";

const AboutUs = () => {
  return (
    <>
      <div
        style={{
          background: "linear-gradient(180deg, #0a101cb7 20%, #0B1220 80%)",
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
        <h1 className="max-w-lg mb-6 md:text-4xl text-6xl font-extrabold leading-[1.3] md:leading-[1.35]">
          {statics.aboutTitle}
        </h1>
        <div className="max-w-2xl w-full text-lg md:text-base">
          {statics.aboutDesc}
        </div>
        <div className="mb-10 mt-2 md:mb-1 md:hidden">
          {statics.aboutDescFooter}
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
