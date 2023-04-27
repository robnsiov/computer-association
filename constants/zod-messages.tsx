export const zodMessages = {
  min: (value: number) => `کمتر از ${value} کارکتر مجاز نمیباشد`,
  max: (value: number) => `بیشتر از ${value} کارکتر مجاز نمیباشد`,
  email: "فرمت ایمیل نادرست میباشد",
  required_error: (name: string) => `${name} نمیتواند خالی باشد`,
  invalid_type_error: "ورودی نامعتر است",
};
