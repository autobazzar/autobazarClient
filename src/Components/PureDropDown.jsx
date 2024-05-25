import { array, func, string } from "prop-types";
import { useState } from "react";
import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";

export default function PureDropDown({ items, title,name,handleChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [choosen, setChoosen] = useState("");
  const chooseOption = (item) => {
    setChoosen(item);
    setIsOpen(false);
    handleChange(item,name);
  };
  return (
    <div className="relative flex flex-col items-center w-fit h-full rounded-lg">
      <button
        onClick={(e) => {
          e.preventDefault();
          setIsOpen((prev) => !prev);
        }}
        className="flex w-full flex-row items-center justify-start gap-3"
      >
        {!isOpen ? (
          <AiFillCaretDown className="h-8" />
        ) : (
          <AiFillCaretUp className="h-8" />
        )}
        <span className="flex flex-row gap-3 items-center">
          <h3 className="font-bold font-dast text-2xl">{`${title}`}</h3>
          <h3 className="font-bold font-dast text-xl text-gray-500">
            {choosen}
          </h3>
        </span>
      </button>

      {isOpen && (
        <div className="flex flex-wrap items-start rounded-lg p-2 gap-5 w-full">
          {items.map((item, i) => (
            <button
              onClick={(e) => {
                e.preventDefault();
                chooseOption(item);
              }}
              className="flex w-fit p-3 justify-between hover:bg-pink-50 cursor-pointer rounded-r-lg border-l-transparent"
              key={i}
            >
              <h3>{item}</h3>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
PureDropDown.propTypes={
    items:array,
    title:string,
    name:string,
    handleChange:func
}