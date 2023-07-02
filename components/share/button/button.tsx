import ButtonImpl from "./types";
import cx from "classnames";

const Button = ({ loading = false, title, className = "" }: ButtonImpl) => {
  return (
    <>
      <button
        type={loading ? "button" : "submit"}
        className={cx(
          `group relative w-full rounded border-none outline-none text-white dark:text-slate-400 dark:bg-slate-700 bg-slate-500
             hover:bg-slate-100 dark:hover:bg-slate-800/75 hover:text-slate-500 h-[44px] text-lg
            transition-all duration-200 flex justify-center items-center`,
          { [className]: className }
        )}
      >
        <span className="transition-all duration-200 opacity-0 group-hover:opacity-100 absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-slate-500"></span>
        <span className="transition-all duration-200 opacity-0 group-hover:opacity-100 absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-slate-500"></span>
        <span className="transition-all duration-200 opacity-0 group-hover:opacity-100 absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-slate-500"></span>
        <span className="transition-all duration-200 opacity-0 group-hover:opacity-100 absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-slate-500"></span>
        {loading ? (
          <div>
            <svg
              className="animate-spin h-[18px] w-[18px] text-white group-hover:text-slate-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </div>
        ) : (
          <span>{title}</span>
        )}
      </button>
    </>
  );
};

export default Button;
