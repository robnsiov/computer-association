import Blog from "@/components/user/share/cards/blog/blog";

const Page = () => {
  return (
    <>
      <Blog
        author="محمدرضا"
        authorImage="/images/el.jpg"
        image="/images/el.jpg"
        category="شبکه"
        href="/"
        title="نحوه کارکرد روتر ها در لایه نتورک و بررسی ساختار آنها"
        view={50}
      />
    </>
  );
};
export default Page;
