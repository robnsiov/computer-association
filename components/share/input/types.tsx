import { UseFormRegister, Path } from "react-hook-form";

export default interface InoutImpl<T> {
  type?: string;
  label: string;
  error: string | undefined;
  wrapperClassName?: string;
  className?: string;
  name: Path<T>;
  register: UseFormRegister<T>;
}

export interface UseInputImpl {
  type: string;
}
