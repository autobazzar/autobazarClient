import { array } from "prop-types"
import { useState } from "react"
import { IoIosArrowBack,IoIosArrowForward } from "react-icons/io";
export default function InfinitySlider({images, className}) {
    
    const [currentImage,setCurrentImage]=useState(0);
    const handleNext = () => {
        setCurrentImage((state) => (state +images.length + 1) % images.length);
    };
    
    const handlePrevious = () => {
        setCurrentImage((state) => (state +images.length - 1) % images.length);
    };
    console.error(currentImage);
  return (
    <div className={`w-[20rem] h-[15rem] relative rounded-lg ${className}`}>
      <img className="w-full h-full rounded-lg" src={images[currentImage]} alt="" />
      <button className="absolute items-center flex  bg-white p-2 opacity-0 rounded-full hover:opacity-100 transition-all mx-3 duration-300 top-[50%] left-0" onClick={handleNext}>
        <IoIosArrowBack />
      </button>
      <button className="absolute bg-white items-center flex  p-2 opacity-0 rounded-full top-[50%] transition-all duration-300 mx-3 hover:opacity-100 " onClick={handlePrevious}>
        <IoIosArrowForward />
      </button>
    </div>
  );
}

InfinitySlider.propTypes={
    images:array
}
