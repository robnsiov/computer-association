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
         cursor-pointer w-4 h-4 bg-transparent active:ring-2 active:ring-blue-300
         border-2 border-primary
         peer-checked:bg-primary
         peer-checked:border-transparent
       rounded-sm flex justify-center items-center`,
            { "border-red-500 active:ring-red-300": error }
          )}
        >
          <span className="w-[5px] h-2 border-b-2 border-r-2 border-white rotate-45"></span>
        </div>
      </label>
      <label htmlFor="r">ok</label>
    </>
  );
}
export default CheckBox;
