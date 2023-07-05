import { Url } from "next/dist/shared/lib/router/router";

export default interface LinkImpl {
  href: Url;
  children: React.ReactNode;
  className?: string;
  target?: string;
  download?: boolean;
  noLoading?: boolean;
}

export interface UseLinkImpl {
  href: Url;
}
