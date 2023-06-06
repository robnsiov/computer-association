import Blogs from "../blogs/blogs";
import Podcast from "./podcast/podcats";

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
          <div className="w-full h-full">
            <Blogs home={true} />
          </div>
        </div>
        <div
          className="w-[40%] flex justify-center items-center flex-col mr-4
        lg:w-full lg:mr-0 lg:mb-5"
        >
          <Podcast />
        </div>
      </div>
    </>
  );
};
export default Home;
