import Blog from "../../share/cards/blog/blog";

const Home = () => {
  return (
    <>
      <div className="w-full h-full flex justify-between items-center px-5 pb-0">
        <div className="w-[60%] h-full flex justify-start items-start flex-col overflow-hidden -mb-10">
          <h1 className="font-black text-4xl mb-4">برترین مقالات</h1>
          <div className="w-full h-full grid grid-cols-3 gap-5 auto-rows-min p-2">
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
      </div>
    </>
  );
};
export default Home;
