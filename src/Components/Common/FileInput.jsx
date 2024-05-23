import { func, string } from "prop-types";
import React, { useRef, useState } from "react";
import { GoPlus } from "react-icons/go";
export default function FileInput({ handleChange, title, accept, type }) {
  const [src, setSrc] = useState("");
  const inputRef = useRef();
  const onContainerClick = () => {
    inputRef.current.click();
  };
  const onInputChange = (event) => {
    const file = event.target.files[0];
    const data = URL.createObjectURL(file);
    handleChange(data);
    setSrc(data);
  };
  return (
    <div className="flex flex-row justify-center items-center gap-3">
      <input
        accept={accept}
        ref={inputRef}
        onChange={onInputChange}
        className="hidden"
        type="file"
      />
      <div
        className=" w-fit h-full bg-white rounded-lg text-blue-600 cursor-pointer flex p-3 flex-col items-center justify-center"
        onClick={onContainerClick}
        onKeyDown={onContainerClick}
        tabIndex="0"
        role="button"
      >
        <GoPlus className="text-[3rem]" />
        {title}
      </div>
      {src &&
        React.createElement(type, {
          src,
          className:'w-[50%] h-[50%]'
        })}
    </div>
  );
}

FileInput.propTypes = {
  handleChange: func,
  title: string,
  accept: string,
  type:string,
};
