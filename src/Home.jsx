import  { useRef } from "react";
import landing from "./assets/image/landing_logo.png";
import { VscSearch } from "react-icons/vsc";
import Slider from "./Components/Common/Slider";
import { useNavigate, Link } from "react-router-dom";

export default function Home() {
  const mainDiv = useRef(null);
  const navigate = useNavigate();
  
  const onClickHandler = () => {
    navigate("/show-ads")
  };
  return (
    <div ref={mainDiv} className=" flex flex-col z-10">
      <div className="flex flex-col lg:flex-row gap-[-5rem] relative w-full items-center h-full justify-center font-dast">
        <div className="flex flex-col gap-y-4 mt-12 lg:pl-5 lg:relative lg:left-[10rem] lg:text-[20px] lg:gap-[5rem] lg:mt-[-11rem]">
          <h1 className="text-2xl lg:text-[2.5rem] font-bold text-[var(--text-black)]">
            !با اتوبازار همین الان ماشینت رو بخر
          </h1>
          <button onClick={() => onClickHandler()} className="h-full w-full lg:w-fit hover:bg-[#4C857A] bg-[var(--buttons-color)] shadow-xl font-bold text-[2rem] text-white flex flex-row w-fit p-5 px-[3rem] justify-center gap-5 rounded-md items-center">
            جستجو کن 
            <VscSearch color="white" fontSize={30} />
          </button>
        </div>
        <img
          className="w-[40rem] relative lg:bottom-15 lg:right-10"
          src={landing}
          alt=""
        />
      </div>
      <Slider mainDiv={mainDiv} className="" />
    </div>
  );
}
