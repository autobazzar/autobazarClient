import React from "react";
import landing from "./assets/image/landing_logo.png";
import { VscSearch } from "react-icons/vsc";
export default function Home() {
  return (
    <div className="flex flex-row gap-[-5rem] relative w-full items-center h-full justify-center font-dast">
      <div className="flex flex-col pl-5 relative left-[10rem] text-[20px] gap-[5rem] mt-[-11rem]">
        <h1 className="text-[2.5rem] font-bold">!با اتوبازار همین الان ماشینت رو بخر</h1>
        <button className="bg-[var(--buttons-color)] font-bold text-[2rem] text-white flex flex-row w-fit p-5 px-[3rem] justify-center gap-5 rounded-md items-center">
          جستجو کن
          <VscSearch color="white" fontSize={30} />
        </button>
      </div>
      <img className="w-[40rem] relative bottom-15 right-10" src={landing} alt="" />
    </div>
  );
}
