import React from 'react'

export default function Avatar({imgSrc}) {
  return (
    <div className='w-[150%] h-full'>
        <img className='w-full h-full max-w-[14rem] rounded-md' src={imgSrc} alt="" />
    </div>
  )
}
