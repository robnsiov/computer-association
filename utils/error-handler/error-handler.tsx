import { AxiosError } from "axios";

const ErrorHandler = (error: AxiosError | unknown, path: string) => {
  console.log(error);
  // network errors
  // server errors
  // custom errors
};
export default ErrorHandler;
