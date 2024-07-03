import { func, string } from "prop-types";
import React, { useRef, useState, useEffect } from "react";
import { GoPlus } from "react-icons/go";

export default function FileInput({ handleChange, title, accept, type, initialSrc }) {
  const [src, setSrc] = useState(initialSrc || ""); // Set initialSrc as the default state
  const inputRef = useRef();

  const onContainerClick = () => {
    inputRef.current.click();
  };

  const onInputChange = (event) => {
    const file = event.target.files[0];
    const data = URL.createObjectURL(file);
    handleChange(file);
    setSrc(data);
  };

  useEffect(() => {
    if (initialSrc) {
      setSrc(initialSrc);
    }
  }, [initialSrc]);

  return (
    <div className="flex flex-row justify-center items-center gap-3 border-[1px]">
      <input
        accept={accept}
        ref={inputRef}
        onChange={onInputChange}
        className="hidden"
        type="file"
      />
      <div
        className="w-fit h-full bg-white rounded-lg text-blue-600 cursor-pointer flex p-3 flex-col items-center justify-center"
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
          className: 'w-[50%] h-[50%]'
        })}
    </div>
  );
}

FileInput.propTypes = {
  handleChange: func.isRequired,
  title: string.isRequired,
  accept: string.isRequired,
  type: string.isRequired,
  initialSrc: string, // Add initialSrc prop type
};
