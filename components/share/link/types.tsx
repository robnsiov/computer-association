import { Url } from "next/dist/shared/lib/router/router";

export default interface LinkImpl {
  href: Url;
  children: React.ReactNode;
  className?: string;
}

export interface UseLinkImpl {
  href: string;
}
