import React from 'react'
import carImg from "../../assets/image/p206.jpg"
export default function AdsItem({className, carName, distance, price, picsUrl}) {
  return (
    <div dir="rtl" className={`flex flex-row justify-around lg:w-1/4 lg:h-1/4 border-2 rounded-md p-2 m-0 items-center ${className}`}>
        <div className='mb-2'>
          <p className='text-lg font-semibold pr-2'>{carName}</p>
          <p className='text-sm mt-6 pr-2'>{distance} کیلومتر</p>
          <p className='text-sm mt-2 pr-2'>{price} تومان</p>
        </div>
        <img src={picsUrl} alt={"carImg"} className='border-1 w-[50%] h-[67%]'/>
    </div>
  )
}