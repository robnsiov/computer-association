import SkeletonProvider, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import useSkeleton from "./use-skeleton";

const Skeleton = () => {
  const { theme } = useSkeleton();
  return (
    <>
      <SkeletonTheme
        baseColor={theme === "dark" ? "#283446" : "#e9ecf6"}
        highlightColor={theme === "dark" ? "#283446" : "#fbfdff"}
      >
        <SkeletonProvider
          className="w-full h-full"
          style={{ borderRadius: "0px" }}
          containerClassName="w-full h-full flex"
        />
      </SkeletonTheme>
    </>
  );
};

export default Skeleton;
