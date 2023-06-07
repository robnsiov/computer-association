import BlogCardImpl from "../../share/cards/blog/types";

export default interface BlogsImpl {
  edit?: boolean;
  home?: boolean;
  videos?: boolean;
  editOperation?(blog: BlogCardImpl): void;
  onView?(src: string): void;
}
