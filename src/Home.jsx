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
    <div ref={mainDiv} className=" flex flex-col z-10 ">
      <div className=" flex flex-row gap-[-5rem] relative w-full items-center h-full justify-center font-dast">
        <div className="top-5 flex flex-col pl-5 relative items-center text-[20px] gap-[2rem] mt-[-1rem]">
          <h1 className="pl-10 text-[2.5rem] font-bold text-[var(--text-black)]">
            !با اتوبازار همین الان ماشینت رو بخر
          </h1>
          <button onClick={() => onClickHandler()} className=" h-[60px] lg:h-[50px] min-h-0  hover:bg-[#4C857A] bg-[var(--buttons-color)] shadow-xl font-bold text-[2rem] text-white flex flex-row w-fit p-5 px-[3rem] justify-center gap-5 rounded-md items-center">
            جستجو کن 
            <VscSearch color="white" fontSize={30} />
          </button>
        </div>
        <img
          className="hidden med:flex w-[40rem] relative bottom-15"
          src={landing}
          alt=""
        />
      </div >
      < Slider mainDiv={mainDiv} />
    </div>
  );
}
