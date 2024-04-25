import { number, string } from "prop-types";
import Avatar from "./Avatar";
import { useCallback, useState } from "react";
import Detail from "../Detail";

export default function SliderItem({ id, title, img, price, kilometer }) {
  const[isOpen,setIsOpen]= useState(false);
  const handleOpen=()=>{
    setIsOpen(true)
  }
  const handleClose=useCallback(()=>{
    setIsOpen(false);
  },[]);
  return (
    <>
      <Detail
        detail={{
          brand: "دنا تیپ یک",
          color: "سفید",
          year: "96",
          kilometer: "صفر",
          price: "960 میلیون تومان",
          body: "سقف باز",
          motor: "سالم",
          shasiJolo: "نامشخص",
          shasiaqab: "نامشخص",
          bime: "6 ماه",
          descriptions: "خودرو صفر ",
          score:'4.2',
          numberOfScores:123,
        }}
        handleClose={handleClose}
        isOpen={isOpen}
      />
      <button
        key={id}
        className="flex flex-row w-fit p-5 items-center justify-center bg-[var(--background-Color)] min-w-fit gap-5"
        onClick={handleOpen}
      >
        <Avatar imgSrc={img} />
        <div className="select-none flex flex-col w-fit text-nowrap" >
          <h1 className="font-bold mb-5">{title}</h1>
          <h3>{kilometer}</h3>
          <h3>{price}</h3>
        </div>
      </button>
    </>
  );
}

SliderItem.propTypes = {
  id: number,
  title: string,
  img: string,
  price: string,
  kilometer: string,
};
