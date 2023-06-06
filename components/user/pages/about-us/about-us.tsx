import Image from "@/components/share/image";

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
          انجمن علمی دانشگاه صنعتی قم
        </h1>
        <div className="max-w-xl w-full text-lg mb-10 md:text-base">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
          درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با
          نرم افزارها شناخت بیشتری
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
