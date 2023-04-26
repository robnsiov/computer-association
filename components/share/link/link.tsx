"use client";

import LinkImpl from "./types";
import NextLink from "next/link";
import useLink from "./use-link";

const Link = ({ href, children, className = "" }: LinkImpl) => {
  const { onClick } = useLink({ href });

  return (
    <>
      <NextLink onClick={onClick} href={href} className={className}>
        {children}
      </NextLink>
    </>
  );
};

export default Link;
