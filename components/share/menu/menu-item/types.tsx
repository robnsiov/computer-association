export default interface MenuItemImpl {
  href: string;
  children: React.ReactNode;
  activeIcon: React.ReactNode;
  inner?: boolean;
}
