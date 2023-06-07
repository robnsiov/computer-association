"use client";

import ContainerImpl from "./types";
import Menu from "../menu/menu";
import PageLoader from "../page-loader/page-loader";
import Providers from "./query-client/query-client";
import Categories from "@/components/user/share/categories/categories";
import Footer from "./designed-by/footer";
import useContainer from "./use-container";
import cx from "classnames";

const Container = ({ children }: ContainerImpl) => {
  const { pageLoading } = useContainer();
  return (
    <>
      <Providers>
        <div
          className="w-full flex justify-start items-start flex-col h-screen
      p-16 pl-0 relative overflow-hidden text-slate-700 md:pr-0"
        >
          <Categories />
          <Menu />
          <PageLoader />
          <div
            className={cx(
              `w-full h-full bg-[#f6f6f9] rounded-3xl rounded-l-none
           p-5 relative overflow-hidden transition-all duration-700 opacity-0`,
              { "opacity-100 transition-all duration-700": !pageLoading }
            )}
          >
            {children}
          </div>
          <Footer />
        </div>
      </Providers>
    </>
  );
};
export default Container;
