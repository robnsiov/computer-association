export const api = {
  baseURL: "https://qut-association.iran.liara.run",
  login: "/account/login/",
  register: "/account/register/",
  forgotPass: "/account/forgot_password/",
  changePass: "/account/change_password/",
  tokenValidation: "/account/token_validation/",
  userProfile: "/account/user/profile/",
  updateUserProfile: "/account/user/update/",
  podcasts: "/post/podcast/archive/",
  events: "/post/event/archive/",
  eventRegister: "/post/event/attend/",
  comments: "/post/comment/list/",
  addComment: "/post/comment/send/",
  userEvents: "/account/user/events/",
  eventCanceling: "/post/event/canceling/",
  singleEvent: "/post/event/",
  singleBlog: "/post/article/",
  blogs: "/post/article/",
  categories: "/post/categories/",
  blogsByCategory: (slug: string) => `/post/${slug}/articles/`,
};
