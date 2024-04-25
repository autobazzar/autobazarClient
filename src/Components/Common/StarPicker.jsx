import { useState } from "react";

export default function StarPicker() {
    const [choosenStar,setChoosenStar]= useState(-1);
  return (
    <div className="flex flex-col gap-2 justify-center">

    <div dir="rtl" className="flex flex-row gap-2 justify-center mt-5">
      {Array(5)
        .fill(0)
        .map((_, index) => (
            <span
            key={index}
            onClick={() => {
                setChoosenStar(index);
            }}
            className={`cursor-pointer ${
                index > choosenStar ? "text-gray-400" : "text-yellow-400"
            }`}
            >
            &#9733;
          </span>
        ))}
        </div>
        <button className="border-[1px] border-gray-400 w-fit self-center py-1 px-10 text-gray-700 rounded-lg shadow-xl">ثبت امتیاز</button>
    </div>
  );
}
