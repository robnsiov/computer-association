import BlogCardImpl from "../../share/cards/blog/types";

export default interface BlogsImpl {
  edit?: boolean;
  home?: boolean;
  editOperation?(blog: BlogCardImpl): void;
}
