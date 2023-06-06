"use client";

import { usePathname } from "next/navigation";
import MenuItemImpl from "./types";
import cx from "classnames";
import Link from "../../link/link";

const MenuItem = ({
  activeIcon,
  children,
  href,
  inner = false,
  label,
}: MenuItemImpl) => {
  const pathname = usePathname();
  const active = pathname === href;
  return (
    <>
      <div
        className={cx(`relative w-full flex justify-center items-center`, {
          "md:justify-start md:pr-4": !inner,
        })}
      >
        <Link
          href={href}
          className="relative cursor-pointer inline-flex justify-center items-center group peer"
        >
          <span
            className="absolute top-[calc(100%+3px)] text-[10px] left-1/2 -translate-x-1/2 bg-slate-700 z-50
          rounded px-1 pt-0.5 text-white whitespace-nowrap 
          opacity-0 invisible transition-all duration-500 
          group-hover:opacity-100 group-hover:visible"
          >
            {label}
          </span>
          {children}
          <div
            className={cx(
              `absolute top-0 right-0 left-0 bottom-0 
                transition-all duration-500  overflow-hidden group-hover:h-6`,
              { "h-6": active, "h-0": !active }
            )}
          >
            {activeIcon}
          </div>
        </Link>
        <span
          className={cx(
            `absolute top-1/2 -translate-y-1/2 w-10 h-7 rounded-md
            rounded-r-none bg-slate-700 peer-hover:-right-9 transition-all duration-500`,
            { "-right-9": active, "-right-10": !active }
          )}
        ></span>
      </div>
    </>
  );
};
export default MenuItem;
