// @ts-nocheck
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
  async = false,
  read = false,
}: InputImpl<T>) {
  const { toPassword, toText, inputType, eye, setFocus, focus } = useInput({
    type,
  });
  const ref = useRef<HTMLInputElement>(null);
  const mergedRef = useMergedRef(ref, register(name).ref);
  let validate = false;
  let activeLabel = false;

  if (ref.current && ref.current?.value.length !== 0) {
    validate = true;
  } else {
    validate = false;
  }

  if (async && validate) {
    activeLabel = !focus || validate;
  } else {
    activeLabel = !focus && validate;
  }

  return (
    <>
      <div
        className={cx("relative w-full flex justify-end items-end flex-col", {
          [wrapperClassName]: wrapperClassName,
        })}
      >
        {textarea ? (
          <textarea
            readOnly={read}
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
              `caret-slate-500 text-slate-700 w-full rounded p-2 py-2.5 pl-9 border-[1px] border-slate-200 bg-transparent
                transition-all duration-200 peer outline-none  focus:ring-2 focus:ring-slate-500 
                dark:text-slate-400 dark:border-slate-400`,
              {
                "ring-2 dark:box-error-shadow-dark ring-red-500 box-error-shadow":
                  error,
                [className]: className,
              }
            )}
          />
        ) : (
          <input
            readOnly={read}
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
              `caret-slate-500 text-slate-700 w-full rounded p-2 py-2.5 pl-9 border-[1px] border-slate-200 bg-transparent
                transition-all duration-200 peer outline-none  focus:ring-2 focus:ring-slate-500
                dark:text-slate-400 dark:border-slate-400`,
              {
                "ring-2 dark:box-error-shadow-dark ring-red-500 box-error-shadow":
                  error,
                [className]: className,
              }
            )}
          />
        )}

        <span
          onClick={() => ref.current?.focus()}
          className={cx(
            `text-lg 
              peer-focus:-top-3.5 peer-focus:px-2 peer-focus:text-slate-500
            absolute top-2 right-3
            bg-white dark:bg-slate-600 dark:text-slate-400 duration-200 transition-all`,
            {
              "top-3-5-important px-2 text-slate-500": activeLabel,
            },
            { "dark:slate-dark-important red-500-important": error }
          )}
        >
          {label}
        </span>
        {error && (
          <span
            className="absolute left-1/2 -translate-x-1/2 -bottom-2 border-2 
        border-red-500 rounded-md text-xs font-semibold px-2 bg-white text-red-400 
        whitespace-nowrap text-center z-40 dark:bg-slate-700 dark:text-slate-300 dark:border-slate-600"
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
                className="absolute top-1/2 left-2.5 -translate-y-1/2 cursor-pointer dark:text-slate-400"
              />
            ) : (
              <EyeSlash
                onClick={toPassword}
                size="20"
                className="absolute top-1/2 left-2.5 -translate-y-1/2 cursor-pointer dark:text-slate-400"
              />
            )}
          </>
        )}
      </div>
    </>
  );
}
export default Input;
