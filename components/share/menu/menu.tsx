"use client";

import MenuItem from "./menu-item/menu-item";
import cx from "classnames";
import {
  Home,
  Profile2User,
  Grid3,
  Setting3,
  Calendar2,
  Sound,
  UserSquare,
  Add,
  Book,
  VideoPlay,
} from "iconsax-react";
import MenuImpl from "./types";
import useMenu from "./use-menu";
import Link from "../link/link";
import { AiFillInstagram } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import ThemeSwitch from "../theme-switch/theme-switch";

const routes = [
  {
    href: "/",
    icon: <Home size="24" className="text-gray-300 dark:text-slate-400" />,
    activeIcon: (
      <Home size="24" className="text-slate-600 dark:text-slate-900" />
    ),
    label: "خانه",
  },
  {
    href: "/user",
    icon: (
      <UserSquare size="24" className="text-gray-300 dark:text-slate-400 " />
    ),
    activeIcon: (
      <UserSquare size="24" className="text-slate-600 dark:text-slate-900" />
    ),
    label: "پروفایل",
  },
  {
    href: "/videos",
    icon: <VideoPlay size="24" className="text-gray-300 dark:text-slate-400" />,
    activeIcon: (
      <VideoPlay size="24" className="text-slate-600 dark:text-slate-900" />
    ),
    label: "ویدیو ها",
  },
  {
    href: "/events",
    icon: <Calendar2 size="24" className="text-gray-300 dark:text-slate-400" />,
    activeIcon: (
      <Calendar2 size="24" className="text-slate-600 dark:text-slate-900" />
    ),
    label: "رویداد ها",
  },
  {
    href: "/podcasts",
    icon: <Sound size="24" className="text-gray-300 dark:text-slate-400" />,
    activeIcon: (
      <Sound size="24" className="text-slate-600 dark:text-slate-900" />
    ),
    label: "پادکست ها",
  },
  {
    href: "/journal",
    icon: <Book size="24" className="text-gray-300 dark:text-slate-400" />,
    activeIcon: (
      <Book size="24" className="text-slate-600 dark:text-slate-900" />
    ),
    label: "نشریه",
  },
  {
    href: "/blogs",
    icon: <Grid3 size="24" className="text-gray-300 dark:text-slate-400" />,
    activeIcon: (
      <Grid3 size="24" className="text-slate-600 dark:text-slate-900" />
    ),
    label: "مقالات",
  },
  {
    href: "/about-us",
    icon: (
      <Profile2User size="24" className="text-gray-300 dark:text-slate-400" />
    ),
    activeIcon: (
      <Profile2User size="24" className="text-slate-600 dark:text-slate-900" />
    ),
    label: "درباره ما",
  },
  {
    href: "/contact-us",
    icon: <Setting3 size="24" className="text-gray-300 dark:text-slate-400" />,
    activeIcon: (
      <Setting3 size="24" className="text-slate-600 dark:text-slate-900" />
    ),
    label: "تماس با ما",
  },
];

const Menu = ({ links, inner = false }: MenuImpl) => {
  const items = links ?? routes;
  const { open, setOpen, windowWidth } = useMenu();
  return (
    <>
      <div
        className={cx(
          `absolute top-0 right-0 bottom-0 flex justify-center items-center
       flex-col w-16 space-y-6`,
          { hidden: !open && windowWidth < 767 && !inner },
          { "md:w-full md:bg-slate-600/60 z-[999]": !inner }
        )}
      >
        {open && windowWidth < 767 && !inner && (
          <>
            <div className="absolute inset-0 backdrop-blur-md"></div>
            <Add
              className="absolute left-4 -top-2 cursor-pointer hidden md:block text-slate-200
          hover:text-slate-500 rotate-45"
              onClick={() => setOpen(false)}
            />
            <div className="absolute bottom-10">
              <div className="flex justify-center items-center text-xl text-white">
                <span className="ml-5 text-sm text-slate-300">
                  به ما ملحق شوید در
                </span>
                <Link href={"/"}>
                  <FaTelegramPlane className="hover:text-slate-600 dark:hover:text-slate-700" />
                </Link>
                <Link href={"/"} className="mx-3">
                  <AiFillInstagram className="hover:text-slate-600 dark:hover:text-slate-700" />
                </Link>
                <Link href={"/"}>
                  <BsTwitter className="hover:text-slate-600 dark:hover:text-slate-700" />
                </Link>
              </div>
            </div>
          </>
        )}
        {items.map(({ href, activeIcon, icon, label }) => (
          <MenuItem
            inner={inner}
            key={href}
            href={href}
            activeIcon={activeIcon}
            label={label}
          >
            {icon}
          </MenuItem>
        ))}
        {!inner && <ThemeSwitch />}
      </div>
    </>
  );
};
export default Menu;
