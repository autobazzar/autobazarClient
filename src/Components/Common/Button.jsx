import React from 'react'

export default function Button({ text , className }) {
  return (
    <button className={`rounded-md bg-[#2b4e47] w-[150px] h-[45px] text-center text-white ${className}`}>{text}</button>
  )
}
