export default interface MenuImpl {
  links?: Array<{
    href: string;
    icon: React.ReactElement;
    activeIcon: React.ReactElement;
  }>;
}
