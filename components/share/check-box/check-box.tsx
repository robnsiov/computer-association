import CheckBoxImpl from "./types";
import cx from "classnames";

function CheckBox<T>({ error, id, name, register }: CheckBoxImpl<T>) {
  return (
    <>
      <label htmlFor={id}>
        <input
          {...register(name)}
          id={id}
          type={"checkbox"}
          className="peer hidden"
        />
        <div
          className={cx(
            `transition-all duration-150
            
         cursor-pointer w-4 h-4 bg-transparent active:ring-2 active:ring-slate-300
         border-2 border-slate-500
         peer-checked:bg-slate-500
         peer-checked:border-transparent
         after:content-['✔']
         after:relative
         after:top-[3px]
         after:transition-all
         after:duration-200
         after:opacity-0
         after:peer-checked:opacity-100
       rounded-sm flex justify-center items-center`,
            { "border-red-500 active:ring-red-300": error }
          )}
        >
          {/* <span className="w-[5px] transition-all duration-200 opacity-0 peer-checked:opacity-100 h-2 border-b-2 border-r-2 border-white rotate-45"></span> */}
        </div>
      </label>
    </>
  );
}
export default CheckBox;
