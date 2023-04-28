import { z as zod } from "zod";

const errorMap: zod.ZodErrorMap = (error, ctx) => {
  switch (error.code) {
    case zod.ZodIssueCode.invalid_type:
    case zod.ZodIssueCode.invalid_string:
      return { message: `فرمت ورودی نادرست میباشد` };
    case zod.ZodIssueCode.too_small:
      return {
        message: `کمتر از ${error.minimum} کارکتر مجاز نمیباشد`,
      };
    case zod.ZodIssueCode.too_big:
      return {
        message: `بیشتر از ${error.maximum} کارکتر مجاز نمیباشد`,
      };
  }
  return { message: ctx.defaultError };
};
zod.setErrorMap(errorMap);
export default zod;
