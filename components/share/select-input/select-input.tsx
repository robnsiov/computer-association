import { useRef } from "react";
import Input from "../input/input";
import SelectInputImpl from "./types";
import useSelectInput from "./use-select-input";
import { useOnClickOutside } from "usehooks-ts";
import cx from "classnames";

function SelectInput<T>(props: SelectInputImpl<T>) {
  const { openSelect, setOpenSelect } = useSelectInput();
  const ref = useRef(null);
  const handleClickOutside = () => {
    if (openSelect) setOpenSelect(false);
  };
  useOnClickOutside(ref, handleClickOutside);

  return (
    <div className="w-full relative">
      <div className="w-full" onClick={() => setOpenSelect(true)}>
        <Input {...props} />
      </div>
      {openSelect && props.categories.length !== 0 && (
        <div
          ref={ref}
          className="w-full absolute top-[54px] right-0 left-0 
      flex justify-start items-start flex-col bg-white 
      border-[1px] border-slate-200 rounded-md z-[200]"
        >
          {props.categories.map(({ id, name }) => (
            <span
              key={id}
              className={cx(`p-2 hover:bg-slate-200 w-full cursor-pointer`, {
                "bg-slate-200": id === props.activeCat,
              })}
              onClick={() => {
                setOpenSelect(false);
                props.setFormCategory(name, id);
              }}
            >
              {name}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
export default SelectInput;
