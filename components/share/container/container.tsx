"use client";

import ContainerImpl from "./types";
import Menu from "../menu/menu";
import useContainer from "./use-container";
import PageLoader from "../page-loader/page-loader";

const Container = ({ children }: ContainerImpl) => {
  useContainer();
  return (
    <>
      <div
        className="w-full flex justify-start items-start flex-col h-screen bg-white 
      p-16 pl-0 relative overflow-hidden text-slate-700"
      >
        <Menu />
        <PageLoader />
        <div className="w-full h-full bg-[#f6f6f9] rounded-3xl rounded-l-none p-5">
          {children}
        </div>
      </div>
    </>
  );
};
export default Container;
