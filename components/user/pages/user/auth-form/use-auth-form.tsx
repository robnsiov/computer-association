import { useMemo, useState } from "react";
import { Auth, FormValues } from "./types";
import { z } from "zod";
import { zodMessages } from "@/constants/zod-messages";
import { useForm, SubmitHandler } from "react-hook-form";

const useAuthForm = () => {
  const [auth, setAuth] = useState<Auth>("signin");
  const validation = useMemo(
    () =>
      z.object({
        email: z
          .string({
            required_error: zodMessages.required_error("ایمیل"),
            invalid_type_error: zodMessages.invalid_type_error,
          })
          .email({ message: zodMessages.email }),
        password: z
          .string()
          .min(8, { message: zodMessages.min(8) })
          .max(16, { message: zodMessages.max(16) }),
      }),
    []
  );
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    alert(JSON.stringify(data));
  };
  return { auth, setAuth, validation, onSubmit };
};
export default useAuthForm;
