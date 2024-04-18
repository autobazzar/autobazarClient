import React from 'react'
import Button from './Common/Button'
import { useSelector } from 'react-redux';
import { MdOutlineEdit } from "react-icons/md";
import { CiSquarePlus } from "react-icons/ci";
import { LuFolderArchive } from "react-icons/lu";
import { RxExit } from "react-icons/rx";
import { IoSearchOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";

import AdsItem from './Common/AdsItem'
export default function Profile() {

  const profile = useSelector((state) => state.profile);
  console.log(profile);
  return (
    <div dir="rtl" className=' flex flex-row h-screen '>
    
      <div className=' bg-[#2b4e47] rounded-bl-[4rem] basis-[28%] flex flex-col gap-y-12 h-[92%]'> 
        <div className='flex flex-row justify-between items-center hover:bg-[#4C857A] '>
          <div>
          <p className='text-xl font-semibold text-white m-5'>ریحانه سلجوقی</p>
          <p className='text-white mr-5 mt-2'>reysalphimo@gmail.com</p>
          </div>
          <MdOutlineEdit color='white'  className="h-12 w-12 ml-5" />
        </div>
        <div className='flex flex-row justify-between items-center hover:bg-[#4C857A]  '>
          <div>
          <p className='text-xl font-semibold text-white m-5'>آگهی های من</p>
          </div>
          <LuFolderArchive color='white'  className="h-12 w-12 ml-5" />
        </div>
        <div className='flex flex-row justify-between items-center hover:bg-[#4C857A]'>
          <div>
          <p className='text-xl font-semibold text-white m-5'>ثبت آگهی </p>
          </div>
          <FaPlus color='white'  className="h-12 w-12 ml-5" />
        </div>
        <div className='flex flex-row justify-between items-center hover:bg-[#4C857A] '>
          <div>
          <p className='text-xl font-semibold text-white m-5'> بازارگردی </p>
          </div>
          <IoSearchOutline color='white'  className="h-12 w-12 ml-5" />
        </div>
        <div className='flex flex-row justify-between items-center hover:bg-[#4C857A] rounded-bl-[4rem]  '>
          <div>
          <p className='text-xl font-semibold text-white m-5'> خروج </p>
          </div>
          <RxExit color='white'  className="h-12 w-12 ml-5" />
        </div>
      </div>
    
      <div className='basis-[72%] mt-5 pr-16'>
          <Button text="جستجو" className='mb-8 shadow-2xl h-[7%]'  />
          <div dir='rtl'  className='overflow-y-auto flex flex-row flex-wrap gap-y-6 gap-x-4 content-start p-0 '>
            <AdsItem className="basis-2/5"/>
            <AdsItem className="basis-2/5"/>
            <AdsItem className="basis-2/5"/>
            <AdsItem className="basis-2/5"/>
            
          </div>
          
                  
      </div>
    </div>
  )
}