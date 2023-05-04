import Image from "@/components/share/image";
import Markdown from "@/components/user/share/markdown/markdown";

const markdown = `# عنوان برنامه`;

const SingleEvent = () => {
  return (
    <>
      <div className="w-full  h-full scrollbar overflow-y-auto pl-3">
        <article className="w-full max-w-xl mx-auto flex justify-start items-center flex-col mt-3">
          <h1 className="font-black text-5xl md:text-4xl text-center md:leading-[1.3] leading-[1.2] mb-6">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
          </h1>
          <div className="w-full h-auto relative overflow-hidden">
            <Image
              className="w-full h-auto object-cover rounded-xl overflow-hidden"
              src="/images/el.jpg"
              width={600}
              height={1500}
              alt="title"
            />
            <span
              className="absolute top-7 -left-12 w-[200px]
             text-center  bg-white p-3 -rotate-45 cursor-pointer"
            >
              شرکت در رویداد
            </span>
          </div>
          <div className="w-full max-w-[350px] text-center mt-4 flex justify-start items-center flex-col space-y-2 p-4 ">
            <div>
              <span className="font-bold">مهلت ثبت نام : </span>
              <span className="mr-2">25 آبان 1402</span>
            </div>
            <div>
              <span className="font-bold">محل برگزاری : </span>
              <span className="mr-2">دانشگاه صنعتی قم</span>
            </div>
            <div>
              <span className="font-bold">ارایه شده توسط : </span>
              <span className="mr-2">
                دانشگاه پردیس فارابی , دانشگاه صنعتی قم
              </span>
            </div>
          </div>
          <div className="w-full mt-8">
            <div className="w-full markdown-body">
              <Markdown markdown={markdown} />
            </div>
          </div>
        </article>
      </div>
    </>
  );
};
export default SingleEvent;
