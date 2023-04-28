import { useMemo, useState } from "react";
import { Auth, FormValues } from "./types";
import { z } from "zod";
import { SubmitHandler } from "react-hook-form";
import zod from "@/constants/zod-messages";
import { useBoolean } from "usehooks-ts";

const useAuthForm = () => {
  const [auth, setAuth] = useState<Auth>("signin");
  // modal-state
  const {
    value: modal,
    setTrue: setOpen,
    setFalse: setHide,
  } = useBoolean(false);
  const validation = useMemo(() => {
    return zod.object({
      email: z.string().email(),
      password: z.string().min(8).max(16),
      rules: z.literal(true),
    });
  }, []);
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    alert(JSON.stringify(data));
  };
  return { auth, setAuth, validation, onSubmit, modal, setOpen, setHide };
};
export default useAuthForm;
