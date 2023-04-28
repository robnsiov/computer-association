import SkeletonProvider, { SkeletonTheme } from "react-loading-skeleton";

const Skeleton = () => {
  return (
    <>
      <SkeletonTheme baseColor="#475569" highlightColor="#64748b">
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
