import Button from "@/components/share/button/button";
import Input from "@/components/share/input/input";
import { Profile2User, Eye } from "iconsax-react";
import { useForm } from "react-hook-form";
import { FormValues } from "./types";
import useAuthForm from "./use-auth-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import Modal from "@/components/share/modal/modal";

const LoginRegister = () => {
  const { auth, setAuth, validation, onSubmit } = useAuthForm();

  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm<FormValues>({
    values: { email: "", password: "" },
    resolver: zodResolver(validation),
  });

  useEffect(() => {
    clearErrors(["email", "password"]);
  }, [auth]);

  return (
    <>
      <Modal inProp={!true}>
        <div className="w-full mr-4">
          <ul className="list-disc space-y-2">
            <li>شراط اول</li>
            <li>شراط دوم</li>
            <li>شراط سوم</li>
          </ul>
        </div>
      </Modal>
      <div className="w-full h-full flex justify-center items-center flex-col">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-sm w-full flex justify-center items-center flex-col p-6 
        shadow bg-white rounded mb-4"
        >
          <div
            className="w-16 h-16 rounded-full border-[1px] border-slate-200 
          flex justify-center items-center mb-6"
          >
            <Profile2User size="34" className="text-primary" />
          </div>
          {/* <span className="font-semibold text-2xl mt-2 mb-4">ثبت نام</span> */}
          <div className="w-full mb-4">
            <Input<FormValues>
              register={register}
              label="ایمیل"
              name="email"
              type="text"
              error={errors.email?.message}
            />
          </div>
          <div className="w-full mb-4">
            <Input<FormValues>
              register={register}
              label="رمزعبور"
              name="password"
              type="password"
              error={errors.password?.message}
            />
          </div>
          <div className="w-full">
            <Button title={auth === "signin" ? "ورود" : "ثبت نام"} />
          </div>
        </form>

        <span
          onClick={() => {
            setAuth((prev) => (prev === "signin" ? "signup" : "signin"));
          }}
          className="cursor-pointer mt-1 text-primary text-[17px] 
            hover:underline underline-offset-8  decoration-dashed decoration-1	  border-transparent"
        >
          {auth === "signin"
            ? "هنوز ثبت نام نکرده اید؟"
            : "قبلا ثبت نام کرده اید؟"}
        </span>
      </div>
    </>
  );
};
export default LoginRegister;
