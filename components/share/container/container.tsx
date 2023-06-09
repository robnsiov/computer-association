"use client";

import ContainerImpl from "./types";
import Menu from "../menu/menu";
import PageLoader from "../page-loader/page-loader";
import Providers from "./query-client/query-client";
import Categories from "@/components/user/share/categories/categories";
import Footer from "./designed-by/footer";
import useContainer from "./use-container";
import cx from "classnames";
import Children from "./children/children";

const Container = ({ children }: ContainerImpl) => {
  const { pageLoading } = useContainer();
  return (
    <>
      <Providers>
        <div
          className="w-full flex justify-start items-start flex-col h-screen
      p-16 pl-0 relative overflow-hidden text-slate-700 md:pr-0 bg-slate-50 dark:bg-slate-600"
        >
          <Categories />
          <Menu />
          <PageLoader />
          <div
            className={
              "w-full h-full bg-slate-100  rounded-3xl rounded-l-none relative overflow-hidden dark:bg-slate-700"
            }
          >
            <div
              className={cx(
                `w-full h-full overflow-hidden relative p-5 md:pl-0 md:pr-3 rounded-3xl rounded-l-none`,
                {
                  "opacity-100 scale-100 duration-700 transition-all":
                    !pageLoading,
                },
                { "opacity-0 scale-90": pageLoading }
              )}
            >
              <Children>{children}</Children>
            </div>
          </div>
          <Footer />
        </div>
      </Providers>
    </>
  );
};
export default Container;
