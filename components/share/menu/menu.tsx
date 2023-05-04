"use client";

import MenuItem from "./menu-item/menu-item";
import { Home, Gallery, Profile2User, Grid3, Setting3 } from "iconsax-react";

const routes = [
  {
    href: "/",
    icon: <Home size="24" className="text-gray-300" />,
    activeIcon: <Home size="24" className="text-slate-600" />,
  },
  {
    href: "/gallery",
    icon: <Gallery size="24" className="text-gray-300" />,
    activeIcon: <Gallery size="24" className="text-slate-600" />,
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
];

const Menu = () => {
  return (
    <>
      <div
        className="absolute top-0 right-0 bottom-0 flex justify-center items-center
       flex-col w-16 space-y-6"
      >
        {routes.map(({ href, activeIcon, icon }) => (
          <MenuItem key={href} href={href} activeIcon={activeIcon}>
            {icon}
          </MenuItem>
        ))}
      </div>
    </>
  );
};
export default Menu;
