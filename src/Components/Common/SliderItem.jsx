import React from "react";
import Avatar from "./Avatar";

export default function SliderItem({ id, title, img, price, kilometer }) {
  return (
    <div key={id} className="flex flex-row w-fit p-5 items-center justify-center bg-[var(--background-Color)] min-w-fit gap-5">
      <Avatar imgSrc={img} />
      <div className="flex flex-col w-fit text-nowrap">
        <h1 className="font-bold mb-5">{title}</h1>
        <h3>{kilometer}</h3>
        <h3>{price}</h3>
      </div>
    </div>
  );
}
