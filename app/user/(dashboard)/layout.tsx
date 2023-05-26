import Menu from "@/components/share/menu/menu";
import { CloudPlus, Edit, Grid3, UserEdit } from "iconsax-react";
const links = [
  {
    href: "/user",
    icon: <UserEdit size="24" className="text-gray-300" />,
    activeIcon: <UserEdit size="24" className="text-slate-600" />,
  },
  {
    href: "/user/blogs",
    icon: <Grid3 size="24" className="text-gray-300" />,
    activeIcon: <Grid3 size="24" className="text-slate-600" />,
  },
  {
    href: "/user/blogs/write",
    icon: <Edit size="24" className="text-gray-300" />,
    activeIcon: <Edit size="24" className="text-slate-600" />,
  },
  {
    href: "/user/uploader",
    icon: <CloudPlus size="24" className="text-gray-300" />,
    activeIcon: <CloudPlus size="24" className="text-slate-600" />,
  },
];
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="w-full h-full flex justify-cente items-center">
        <Menu inner={true} links={links} />
        <div className="w-full h-full mr-10">{children}</div>
      </div>
    </>
  );
};
export default Layout;
