import { UseFormRegister, Path } from "react-hook-form";

export default interface InputImpl<T> {
  type?: string;
  label: string;
  error: string | undefined;
  wrapperClassName?: string;
  className?: string;
  name: Path<T>;
  textarea?: boolean;
  register: UseFormRegister<T>;
  async?: boolean;
  read?: boolean;
}

export interface UseInputImpl {
  type: string;
}
