export default interface CommentsImpl {
  type: "ARTICLE" | "PODCAST";
  slug: string;
  title?: string;
  onConfirm(): void;
}

export interface CommentsFormValues {
  body: string;
  name: string;
}
export interface CommentsRequest {
  created_at: string;
  content: string;
  name: string;
  id: number;
}
