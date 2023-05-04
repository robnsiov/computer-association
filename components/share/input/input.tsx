"use client";

import { Eye, EyeSlash } from "iconsax-react";
import { useRef } from "react";
import InputImpl from "./types";
import useInput from "./use-input";
import { useMergedRef } from "@mantine/hooks";
import cx from "classnames";

function Input<T>({
  type = "text",
  label,
  register,
  name,
  error,
  wrapperClassName = "",
  className = "",
  textarea = false,
}: InputImpl<T>) {
  const { toPassword, toText, inputType, eye, setFocus, focus } = useInput({
    type,
  });
  const ref = useRef<HTMLInputElement>(null);
  const mergedRef = useMergedRef(ref, register(name).ref);
  return (
    <>
      <div
        className={cx("relative w-full flex justify-end items-end flex-col", {
          [wrapperClassName]: wrapperClassName,
        })}
      >
        {textarea ? (
          <textarea
            autoComplete={`${name === "password" ? `new-${name}` : "off"}`}
            type={inputType}
            {...register(name)}
            onBlur={(e) => {
              register(name).onBlur(e);
              setFocus(false);
            }}
            onFocus={() => {
              setFocus(true);
            }}
            ref={mergedRef}
            spellCheck={false}
            className={cx(
              `caret-primary text-slate-700 w-full rounded p-2 py-2.5 pl-9 border-[1px] border-slate-200 bg-transparent
                transition-all duration-200 peer outline-none  focus:ring-2 focus:ring-primary`,
              {
                "ring-2 ring-red-500 box-error-shadow": error,
                [className]: className,
              }
            )}
          />
        ) : (
          <input
            autoComplete={`${name === "password" ? `new-${name}` : "off"}`}
            type={inputType}
            {...register(name)}
            onBlur={(e) => {
              register(name).onBlur(e);
              setFocus(false);
            }}
            onFocus={() => {
              setFocus(true);
            }}
            ref={mergedRef}
            spellCheck={false}
            className={cx(
              `caret-primary text-slate-700 w-full rounded p-2 py-2.5 pl-9 border-[1px] border-slate-200 bg-transparent
                transition-all duration-200 peer outline-none  focus:ring-2 focus:ring-primary`,
              {
                "ring-2 ring-red-500 box-error-shadow": error,
                [className]: className,
              }
            )}
          />
        )}

        <span
          onClick={() => ref.current?.focus()}
          className={cx(
            `text-lg 
              peer-focus:-top-3.5 peer-focus:px-2 peer-focus:text-primary
            absolute top-2 right-3
            bg-white duration-200 transition-all`,
            {
              "top-3-5-important px-2 text-primary":
                !focus && ref.current?.value.length !== 0,
            },
            { "red-500-important": error }
          )}
        >
          {label}
        </span>
        {error && (
          <span
            className="absolute left-1/2 -translate-x-1/2 -bottom-2 border-2 
        border-red-500 rounded-md text-xs font-semibold px-2 bg-white text-red-400 
        whitespace-nowrap text-center"
          >
            {error}
          </span>
        )}

        {type === "password" && (
          <>
            {eye ? (
              <Eye
                onClick={toText}
                size="20"
                className="absolute top-1/2 left-2.5 -translate-y-1/2 cursor-pointer"
              />
            ) : (
              <EyeSlash
                onClick={toPassword}
                size="20"
                className="absolute top-1/2 left-2.5 -translate-y-1/2 cursor-pointer"
              />
            )}
          </>
        )}
      </div>
    </>
  );
}
export default Input;
