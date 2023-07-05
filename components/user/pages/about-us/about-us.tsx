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
       text-white text-center p-8 dark:text-slate-500"
      >
        <h1 className="max-w-xl mb-5 text-4xl font-extrabold">
          {statics.aboutTitle}
        </h1>
        <div className="max-w-xl w-full text-lg mb-10 md:text-base">
          {statics.aboutDesc}
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
