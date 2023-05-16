"use client";

import MenuItem from "./menu-item/menu-item";
import {
  Home,
  Profile2User,
  Grid3,
  Setting3,
  Calendar2,
  Sound,
} from "iconsax-react";
import MenuImpl from "./types";

const routes = [
  {
    href: "/",
    icon: <Home size="24" className="text-gray-300" />,
    activeIcon: <Home size="24" className="text-slate-600" />,
  },
  {
    href: "/user",
    icon: <Profile2User size="24" className="text-gray-300" />,
    activeIcon: <Profile2User size="24" className="text-slate-600" />,
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
];

const Menu = ({ links }: MenuImpl) => {
  const items = links ?? routes;
  return (
    <>
      <div
        className="absolute top-0 right-0 bottom-0 flex justify-center items-center
       flex-col w-16 space-y-6"
      >
        {items.map(({ href, activeIcon, icon }) => (
          <MenuItem key={href} href={href} activeIcon={activeIcon}>
            {icon}
          </MenuItem>
        ))}
      </div>
    </>
  );
};
export default Menu;
