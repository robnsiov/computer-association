export default interface MenuImpl {
  inner?: boolean;
  links?: Array<{
    href: string;
    icon: React.ReactElement;
    activeIcon: React.ReactElement;
    label: string;
  }>;
}
