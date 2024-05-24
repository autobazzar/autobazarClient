import PropTypes from 'prop-types';
import Button from './Button';
import { useState,useEffect ,useCallback} from 'react';
import Detail from '../Detail';
export default function AdsItem({className, carName, distance, price, picsUrl, id}) {
  const[isOpen,setIsOpen]= useState(false);
  const handleOpen=()=>{
    setIsOpen(true)
  }
  const handleClose=useCallback(()=>{
    setIsOpen(false);
  },[]);
  return (
    <>
      <Detail
        detail={{
          brand: "دنا تیپ یک",
          color: "سفید",
          year: "96",
          kilometer: "صفر",
          price: "960 میلیون تومان",
          body: "سقف باز",
          motor: "سالم",
          shasiJolo: "نامشخص",
          shasiaqab: "نامشخص",
          bime: "6 ماه",
          descriptions: "خودرو صفر ",
          score:'4.2',
          numberOfScores:123,
        }}
        handleClose={handleClose}
        isOpen={isOpen}
      />
      <button key={id} onClick={handleOpen} dir="rtl" className={`flex flex-row justify-around lg:w-1/4 lg:h-1/4 border-2 rounded-md p-2 m-0 items-center ${className}`}>
          <div className='mb-2'>
            <p className='text-lg font-semibold pr-2'>{carName}</p>
            <p className='text-sm mt-6 pr-2 text-right'>{distance} کیلومتر</p>
            <p className='text-sm mt-2 pr-2 text-right'>{price} تومان</p>
          </div>
          <img src={picsUrl} alt={"carImg"} className='border-1 w-[50%] h-[67%]'/>
      </button>
    </>
  )
}

AdsItem.propTypes = {
  className: PropTypes.string.isRequired,
  carName: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  distance: PropTypes.string.isRequired,
  picsUrl: PropTypes.string.isRequired,
};