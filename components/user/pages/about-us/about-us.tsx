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
        className="absolute inset-0 z-10 flex justify-end items-center flex-col
       text-white text-center p-4 md:text-slate-600"
      >
        <h1 className="max-w-xl mb-5 text-4xl font-extrabold">
          {statics.aboutTitle}
        </h1>
        <div className="max-w-xl w-full text-lg mb-10 md:text-base">
          {statics.aboutDesc}
        </div>
      </div>
      <div className="absolute inset-0 flex justify-center items-start">
        <div className="md:overflow-hidden md:max-w-md w-full md:p-4">
          <Image
            src="/images/G-gp-931.jpg"
            width={2000}
            height={900}
            className="object-cover object-top w-full h-full md:rounded-2xl"
            alt="about-us"
          />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
