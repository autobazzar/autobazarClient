import PropTypes from 'prop-types';
import Button from './Button';
import { useState,useEffect ,useCallback} from 'react';
import Detail from '../Detail';
export default function AdsItem({className,id, ad}) {
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
          brand: ad.carName,
          color: ad.color,
          year: ad.year,
          kilometer:ad.distance,
          price: ad.price,
          body: "body",
          motor: ad.motor,
          fuel: ad.fuel,
          bime: ad.insurance,
          descriptions: ad.additionalInfo,
          score:ad.score,
          numberOfScores:'',
        }}
        handleClose={handleClose}
        isOpen={isOpen}
        img={ad.picsUrl}
      />
      <button key={id} onClick={handleOpen} dir="rtl" className={`flex flex-row justify-around lg:w-1/4 lg:h-1/4 border-2 rounded-md p-2 m-0 items-center ${className}`}>
          <div className='mb-2'>
            <p className='text-lg font-semibold pr-2'>{ad.carName}</p>
            <p className='text-sm mt-6 pr-2 text-right'>{ad.distance} کیلومتر</p>
            <p className='text-sm mt-2 pr-2 text-right'>{ad.price} تومان</p>
          </div>
          <img src={ad.picsUrl} alt={"carImg"} className='border-1 w-[50%] h-[67%]'/>
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