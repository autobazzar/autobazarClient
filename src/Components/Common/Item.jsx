import PropTypes from 'prop-types';
import { useState,useCallback} from 'react';
import Detail from '../Detail';
import Avatar from './Avatar';
export default function Item({className,id, ad, type, isMine}) {
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
        id={ad.adId}
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
          address: ad.address
        }}
        handleClose={handleClose}
        isOpen={isOpen}
        img={ad.picsUrl}
        isMine={isMine}
      />
      {type === "ad" &&
          <button 
            key={id} 
            onClick={handleOpen} 
            dir="rtl" 
            className={`flex flex-row justify-around lg:w-1/4 lg:h-1/4 border-2 rounded-md p-2 m-0 items-center ${className}`}
            >
              <div className='mb-2'>
                <p className='text-lg font-semibold pr-2'>{ad.carName}</p>
                <p className='text-sm mt-6 pr-2 text-right'>{ad.distance} کیلومتر</p>
                <p className='text-sm mt-2 pr-2 text-right'>{ad.price} تومان</p>
              </div>
              <img src={ad.picsUrl} alt={"carImg"} className='border-1 w-[50%] h-[67%]'/>
          </button>
      }
      {type ==="slider" &&
          <button
            key={id}
            className="flex flex-row w-fit p-5 items-center justify-center bg-[var(--background-Color)] min-w-fit gap-5"
            onClick={handleOpen}
            >
            <Avatar imgSrc={ad.picsUrl} />
            <div className="select-none flex flex-col w-fit text-nowrap" >
              <h1 className="font-bold mb-5">{ad.carName}</h1>
              <h3>{ad.distance} کیلومتر</h3>
              <h3>{ad.price} تومان</h3>
            </div>
          </button>
      }
    </>
  )
}

Item.propTypes = {
  className: PropTypes.string.isRequired,
  ad:PropTypes.object.isRequired,
  id:PropTypes.string.isRequired,
  type:PropTypes.string,
  isMine: PropTypes.bool
};