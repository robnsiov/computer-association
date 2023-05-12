export interface CommentsFormValues {
  body: string;
  name: string;
}
export interface CommentsRequest {
  date: Date;
  body: string;
  id: string;
  user: {
    name: string;
  };
}
