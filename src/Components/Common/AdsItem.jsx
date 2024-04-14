import React from 'react'
import carImg from "E:\\Courses\\Term_8\\SE\\project\\front\\src\\assets\\image\\p206.jpg"
export default function AdsItem() {
  return (
    <div dir="rtl" className='relative basis-[32%] w-[340px] h-[160px] border-2 rounded-md p-2 m-0'>
        <p className='text-[18px] font-semibold pr-2 pt-3'>پژو 206 تیپ 2</p>
        <p className='text-[14px] mt-6 pr-2'>195000 کیلومتر</p>
        <p className='text-[14px] mt-2 pr-2'>230.000.000 تومان</p>
        <img src={carImg} alt="carImg" className='absolute top-7 left-4 border-1 w-[150px] h-[100px]'/>
    </div>

  )
}
