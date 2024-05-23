import React from 'react'

export default function Button({ text , className,type}) {
  return (
    <button type={type} className={`rounded-md bg-[#2b4e47] lg:w-[12%] shadow-lg hover:bg-[#4C857A] text-center text-white ${className}`}>
      {text}
    </button>
  )
}