import React from 'react'
import Button from './Common/Button'
import AdsItem from './Common/AdsItem'
import DropDownMenu from './Common/DropDownMenu'
export default function ShowAds() {
    const dropdownItems = ['Item 1', 'Item 2', 'Item 3'];
  return (
    <>
        <div dir="rtl" className='flex flex-col h-full min-h-0 '>
            <div className='flex flex-row bg-white justify-between items-center fixed top-12 px-16 w-full min-h-0 h-[60px] mb-0'>
                 <p className='text-2xl font-semibold'>فیلترها</p>
                 <Button text="آگهی بده!" className=""/>
            </div>
            <div className='flex flex-row mt-[54px] basis-3/4 px-16 pt-4'> 
                <div className='flex flex-col basis-1/5'>
                    <DropDownMenu title="برند و تیپ" items={dropdownItems} />
                    <DropDownMenu title="Dropdown 2" items={dropdownItems} />
                    <DropDownMenu title="Dropdown 3" items={dropdownItems} />
                </div>              
                <div dir="ltr" className='flex flex-row flex-wrap basis-4/5 gap-y-6 gap-x-4 content-start p-0 m-0'>
                    <AdsItem/>
                    <AdsItem/>
                    <AdsItem/>
                    <AdsItem/>
                    <AdsItem/>
                    <AdsItem/>
                    <AdsItem/>
                    <AdsItem/>
                    <AdsItem/>
                    <AdsItem/>
                </div>
            </div>
        </div>
    </>
  )
}


 