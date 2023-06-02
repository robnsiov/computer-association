"use client";

import ContainerImpl from "./types";
import Menu from "../menu/menu";
import PageLoader from "../page-loader/page-loader";
import Providers from "./query-client/query-client";
import Categories from "@/components/user/share/categories/categories";
import Footer from "./designed-by/footer";
import { Profiler, memo } from "react";

const Container = () => {
  // useContainer();
  console.log(1);
  return (
    <>
      {/* <Profiler id="app" onRender={console.log}> */}
      {/* <Providers>
          <div
            className="w-full flex justify-start items-start flex-col h-screen
      p-16 pl-0 relative overflow-hidden text-slate-700 md:pr-0"
          >
            <Categories />
            <Menu />
            <PageLoader />
            <div className="w-full h-full bg-[#f6f6f9] rounded-3xl rounded-l-none p-5 relative overflow-hidden">
              {children}
            </div>
            <Footer />
          </div>
        </Providers> */}
      {/* </Profiler> */}
    </>
  );
};
export default memo(Container);
