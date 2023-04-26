import ContainerImpl from "./types";
import Menu from "../menu/menu";

const Container = ({ children }: ContainerImpl) => {
  return (
    <>
      <div
        className="w-full flex justify-start items-start flex-col h-screen bg-white 
      p-16 pl-0 relative overflow-hidden text-slate-700"
      >
        <Menu />
        <div className="w-full h-full bg-[#f6f6f9] rounded-3xl rounded-l-none">
          {children}
        </div>
      </div>
    </>
  );
};
export default Container;
