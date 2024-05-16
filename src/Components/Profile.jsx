import React from 'react'
import Button from './Common/Button'
import { useSelector } from 'react-redux';
import { MdOutlineEdit } from "react-icons/md";
import { CiSquarePlus } from "react-icons/ci";
import { LuFolderArchive } from "react-icons/lu";
import { RxExit } from "react-icons/rx";
import { IoSearchOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import AdsItem from './Common/AdsItem'
export default function Profile() {

  const profile = useSelector((state) => state.profile);
  console.log(profile);
  return (
    <div dir="rtl" className='flex flex-row h-screen '>
    
      <div className=' bg-[#2b4e47] med:rounded-bl-[4rem] med:basis-[28%] w-full flex flex-col gap-y-12 h-[92%]'> 
        <div className='flex flex-row justify-start med:justify-between items-center hover:bg-[#4C857A] '>
          <MdOutlineEdit color='white' className="med:hidden h-12 w-12 pr-4" />
          <div>
          <p className='text-xl font-semibold text-white m-5'>ریحانه سلجوقی</p>
          <p className='text-white mr-5 mt-2'>reysalphimo@gmail.com</p>
          </div>
          <MdOutlineEdit color='white'  className="hidden med:block h-12 w-12 ml-5" />
        </div>
        <div className='flex flex-row justify-start med:justify-between items-center hover:bg-[#4C857A]  '>
          <LuFolderArchive color='white'  className="med:hidden h-12 w-12 pr-4" />
          <div>
          <p className='text-xl font-semibold text-white m-5'>آگهی های من</p>
          </div>
          <LuFolderArchive color='white'  className="hidden med:block h-12 w-12 ml-5" />
        </div>
        <div className='flex flex-row justify-start med:justify-between items-center hover:bg-[#4C857A]'>
          <FaPlus color='white'  className="med:hidden h-12 w-12 ml-5 pr-4" />
          <div>
          <p className='text-xl font-semibold text-white m-5'>ثبت آگهی </p>
          </div>
          <FaPlus color='white'  className="hidden med:block h-12 w-12 ml-5" />
        </div>
        <div className='flex flex-row justify-start med:justify-between items-center hover:bg-[#4C857A] '>
          <IoSearchOutline color='white'  className=" med:hidden h-12 w-12 ml-5 pr-4" />
          <div>
          <p className='text-xl font-semibold text-white m-5'> بازارگردی </p>
          </div>
          <IoSearchOutline color='white'  className=" hidden med:block h-12 w-12 ml-5" />
        </div>
        <div className='flex flex-row justify-start med:justify-between items-center hover:bg-[#4C857A]   '>
          <RxExit color='white'  className=" med:hidden h-12 w-12 ml-5 pr-4" />
          <div>
          <p className='text-xl font-semibold text-white m-5'> خروج </p>
          </div>
          <RxExit color='white'  className=" hidden med:block h-12 w-12 ml-5" />
        </div>
      </div>
    
      <div className=' hidden med:block med:basis-[72%] mt-5 pr-16'>
        
          <form class="w-[37%] mb-8">   
              <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
              <div class="relative min-h-0 h-full">
                  <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                      </svg>
                  </div>
                  <input type="search" id="default-search" class="block w-full h-[42px] p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="آگهیت رو جستجو کن!" required />
                  <Button type="submit" text="جستجو" className='h-[80%] !w-1/4 shadow-2xl text-sm text-white text-center absolute end-2.5 bottom-1 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'  />
              </div>
          </form>

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