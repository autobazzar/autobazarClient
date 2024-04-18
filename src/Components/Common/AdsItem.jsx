import React from 'react'
import carImg from "../../assets/image/p206.jpg"
export default function AdsItem({className}) {
  return (
    <div dir="rtl" className={`flex flex-row justify-around w-1/4 h-1/4 border-2 rounded-md p-2 m-0 items-center ${className}`}>
        <div className='mb-2'>
          <p className='text-lg font-semibold pr-2'>پژو 206 تیپ 2</p>
          <p className='text-sm mt-6 pr-2'>195000 کیلومتر</p>
          <p className='text-sm mt-2 pr-2'>230.000.000 تومان</p>
        </div>
        <img src={carImg} alt={"carImg"} className='border-1 w-[50%] h-[67%]'/>
    </div>
  )
}