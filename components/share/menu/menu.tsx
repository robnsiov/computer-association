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
  CloseCircle,
  UserSquare,
} from "iconsax-react";
import MenuImpl from "./types";
import useMenu from "./use-menu";

const routes = [
  {
    href: "/",
    icon: <Home size="24" className="text-gray-300" />,
    activeIcon: <Home size="24" className="text-slate-600" />,
  },
  {
    href: "/user",
    icon: <UserSquare size="24" className="text-gray-300" />,
    activeIcon: <UserSquare size="24" className="text-slate-600" />,
  },
  {
    href: "/blogs",
    icon: <Grid3 size="24" className="text-gray-300" />,
    activeIcon: <Grid3 size="24" className="text-slate-600" />,
  },
  {
    href: "/contact-us",
    icon: <Setting3 size="24" className="text-gray-300" />,
    activeIcon: <Setting3 size="24" className="text-slate-600" />,
  },
  {
    href: "/events",
    icon: <Calendar2 size="24" className="text-gray-300" />,
    activeIcon: <Calendar2 size="24" className="text-slate-600" />,
  },
  {
    href: "/podcasts",
    icon: <Sound size="24" className="text-gray-300" />,
    activeIcon: <Sound size="24" className="text-slate-600" />,
  },
  {
    href: "/about-us",
    icon: <Profile2User size="24" className="text-gray-300" />,
    activeIcon: <Profile2User size="24" className="text-slate-600" />,
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
          { "md:w-full md:bg-black/95 z-50": !inner }
        )}
      >
        {!inner && (
          <CloseCircle
            className="absolute left-4 top-4 cursor-pointer hidden md:block text-slate-200
          hover:text-slate-500"
            onClick={() => setOpen(false)}
          />
        )}
        {items.map(({ href, activeIcon, icon }) => (
          <MenuItem
            inner={inner}
            key={href}
            href={href}
            activeIcon={activeIcon}
          >
            {icon}
          </MenuItem>
        ))}
      </div>
    </>
  );
};
export default Menu;
