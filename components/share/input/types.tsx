import { UseFormRegister, Path, FieldValues } from "react-hook-form";

export default interface InoutImpl<T> {
  type?: string;
  label: string;
  error: string | undefined;
  name: Path<T>;
  register: UseFormRegister<T>;
}

export interface UseInputImpl {
  type: string;
}
