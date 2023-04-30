import SkeletonProvider, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Skeleton = () => {
  return (
    <>
      <SkeletonTheme baseColor="#e9ecf6" highlightColor="#fbfdff">
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
