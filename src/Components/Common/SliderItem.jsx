import { number, object } from "prop-types";
import Avatar from "./Avatar";
import { useCallback, useState } from "react";
import Detail from "../Detail";

export default function SliderItem({ id, ad  }) {
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
          brand: ad.carName,
          color: ad.color,
          year: ad.year,
          kilometer:ad.distance,
          price: ad.price,
          body: "body",
          motor: ad.motor,
          fuel: ad.fuel,
          bime: ad.insurance,
          descriptions: ad.additionalInfo,
          score:ad.score,
          numberOfScores:'',
          location:ad.address,
        }}
        handleClose={handleClose}
        isOpen={isOpen}
        img={ad.picsUrl}
      />
      <button
        key={id}
        className="flex flex-row p-5 items-center justify-center bg-[var(--background-Color)] gap-5"
        onClick={handleOpen}
      >
        <Avatar imgSrc={ad.picsUrl} />
        <div className="select-none flex flex-col text-nowrap w-full" >
          <h1 className="font-bold mb-5">{ad.carName}</h1>
          <h3>{ad.distance}</h3>
          <h3>{ad.price}</h3>
        </div>
      </button>
    </>
  );
}

SliderItem.propTypes = {
  id: number,
  ad:object
};
