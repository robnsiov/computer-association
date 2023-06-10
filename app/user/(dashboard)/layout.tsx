import Menu from "@/components/share/menu/menu";
import Protected from "@/components/user/share/protected/protected";
import {
  CalendarSearch,
  CloudPlus,
  Edit,
  Grid3,
  Logout,
  UserEdit,
} from "iconsax-react";
const links = [
  {
    href: "/user",
    icon: <UserEdit size="24" className="text-gray-300 dark:text-slate-400" />,
    activeIcon: (
      <UserEdit size="24" className="text-slate-600 dark:text-slate-900" />
    ),
    label: "حساب کاربری",
  },
  {
    href: "/user/blogs",
    icon: <Grid3 size="24" className="text-gray-300 dark:text-slate-400" />,
    activeIcon: (
      <Grid3 size="24" className="text-slate-600 dark:text-slate-900" />
    ),
    label: "مقالات من",
  },
  {
    href: "/user/blogs/write",
    icon: <Edit size="24" className="text-gray-300 dark:text-slate-400" />,
    activeIcon: (
      <Edit size="24" className="text-slate-600 dark:text-slate-900" />
    ),
    label: "ایجاد مقاله",
  },
  {
    href: "/user/uploader",
    icon: <CloudPlus size="24" className="text-gray-300 dark:text-slate-400" />,
    activeIcon: (
      <CloudPlus size="24" className="text-slate-600 dark:text-slate-900" />
    ),
    label: "آپلودر",
  },
  {
    href: "/user/events",
    icon: (
      <CalendarSearch size="24" className="text-gray-300 dark:text-slate-400" />
    ),
    activeIcon: (
      <CalendarSearch
        size="24"
        className="text-slate-600 dark:text-slate-900"
      />
    ),
    label: "رویداد های من",
  },
  {
    href: "/user/logout",
    icon: <Logout size="24" className="text-gray-300 dark:text-slate-400" />,
    activeIcon: (
      <Logout size="24" className="text-slate-600 dark:text-slate-900" />
    ),
    label: "خروج",
  },
];
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="w-full h-full flex justify-cente items-center">
        <Protected>
          <Menu inner={true} links={links} />
          <div className="w-full h-full mr-10">{children}</div>
        </Protected>
      </div>
    </>
  );
};
export default Layout;
