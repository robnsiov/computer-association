import Image from "next/image";

const Page = () => {
  return (
    <>
      <div className="w-full h-full flex justify-center items-center flex-col text-center">
        <Image
          height={900}
          width={900}
          src={"/images/not-found.png"}
          priority
          alt="not-found"
        />
      </div>
    </>
  );
};
export default Page;
