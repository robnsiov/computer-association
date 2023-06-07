// @ts-nocheck
import { UseFormRegister, Path } from "react-hook-form";

export default interface CheckBoxImpl<T> {
  id: string;
  error: string | undefined;
  name: Path<T>;
  register: UseFormRegister<T>;
}
