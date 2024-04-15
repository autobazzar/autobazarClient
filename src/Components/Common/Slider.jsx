import React from "react";
import SliderItem from "./SliderItem";
let id = 0;
export default function Slider() {
  const arr = Array(10)
    .fill(0)
    .map((_) => id++);
  return (
    <div className="relative ">
      <div className="w-full cursor-pointer flex flex-row gap-5 absolute bg-[var(--slider-background)] p-5 text-[var(--text-black)] overflow-hidden">
        {arr.map((item) => {
          return (
            <SliderItem
              key={item}
              img={
                "https://spyne-static.s3.amazonaws.com/AI-tools/car-photo-editing-before.webp"
              }
              id={item}
              title={"پراید هاشبک"}
              kilometer={"1000 کیلومتر"}
              price={"5000,000,000, میلیون تومان"}
            />
          );
        })}
      </div>
    </div>
  );
}
