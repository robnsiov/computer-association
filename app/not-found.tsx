import Link from "@/components/share/link/link";
import Image from "next/image";

const Page = () => {
  return (
    <>
      <div className="w-full h-full flex justify-center items-center flex-col text-center">
        <Image
          height={500}
          width={500}
          src={"/images/not-found.png"}
          priority
          alt="not-found"
          className="w-full max-w-lg aspect-square object-contain object-center"
        />
        <Link
          href="/"
          className="border-2 border-primary px-6 py-2 text-primary"
        >
          بازگشت به خانه
        </Link>
      </div>
    </>
  );
};
export default Page;
