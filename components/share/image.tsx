"use client";

import NextImage from "next/image";

// import ImageLoader from "./image-loader/image-loader";
import ImageImpl from "./types";
import useImage from "./use-image";
import errorImage from "../../public/images/404.jpg";
import FadeAnimation from "./fade-animation/fade-animation";
import Skeleton from "./skeleton/skeleton";

const Image = ({ className, height, src, width, alt }: ImageImpl) => {
  const { error, loading, endLoading, activationError } = useImage();
  return (
    <>
      <div className="w-full h-full flex justify-center items-center relative">
        {/* <ImageLoader size="md" /> */}
        {/* <ImageLoader inProp={loading} /> */}
        <FadeAnimation
          className="absolute inset-0 z-30 w-full h-full"
          inProp={loading}
        >
          <Skeleton />
        </FadeAnimation>
        {error && (
          <NextImage className={className} src={errorImage} alt="404" />
        )}
        <NextImage
          onLoad={endLoading}
          onError={activationError}
          alt={alt}
          className={`${className} ${!loading && !error ? "block" : "hidden"}`}
          src={src}
          priority
          width={width}
          height={height}
        />
      </div>
    </>
  );
};

export default Image;
