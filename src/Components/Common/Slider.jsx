import React, { useRef } from "react";
import SliderItem from "./SliderItem";
import useSlider from "../../hooks/useSlider";
let id = 0;
export default function Slider({mainDiv}) {
  const sliderRef = useRef(null);
  const [handleMouseDown,handleMoveOver,handlMouseUp,translate]= useSlider(mainDiv,sliderRef);
  const arr = Array(10)
    .fill(0)
    .map((_) => id++);
  return (
    <div className="relative overflow-hidden ">
      <div
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
        onMouseMove={handleMoveOver}
        onTouchMove={handleMoveOver}
        onTouchEnd= {handlMouseUp}
        onMouseUp=  {handlMouseUp}
        style={{ transform: `translate(${translate}px)` }}
        className="w-full cursor-pointer relative flex flex-row gap-5 bg-[var(--slider-background)] p-5 text-[var(--text-black)]"
      >
        {arr.map((item) => {
          return (
            <SliderItem
              key={item}
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
