import React from 'react'
import Button from './Common/Button'
import AdsItem from './Common/AdsItem'
import DropDownMenu from './Common/DropDownMenu'
export default function ShowAds() {
    const dropdownItems = ['Item 1', 'Item 2', 'Item 3'];
  return (
    <>
        <div dir="rtl" className=' h-screen flex flex-col h-full min-h-0 '>
            <div className='z-10 flex flex-row bg-white justify-between items-center fixed top-12 px-16 w-full min-h-0 h-[7%] mb-0'>
                 <p className='text-2xl font-semibold'>فیلترها</p>
                 <Button text="آگهی بده!" className="h-[90%]"/>
            </div>
            <div className=' h-screen z-0 flex flex-row mt-[54px] basis-3/4 px-16 pt-4'> 
                <div className='flex flex-col basis-1/5 '>
                    <DropDownMenu title="برند و تیپ" items={['بی ام و', 'پراید', 'رانا','سایپا','پژو']} showInput={false}/>
                    <DropDownMenu title="رنگ" items={dropdownItems} showInput={true} placeholder={"رنگ را وارد کنید"}/>
                    <DropDownMenu title="سال تولید" items={dropdownItems} showInput={true} placeholder={"مثلا 1399"}/>
                    <DropDownMenu title="کارکرد" items={dropdownItems} showInput={true} placeholder={'مثلا 1000 کیلومتر'}/>
                    {/*typi */}
                    <DropDownMenu title="قیمت" items={dropdownItems} showInput={true} placeholder={'به میلیون تومان'}/>
                    <DropDownMenu title="مشخصات بدنه" items={[' سالم', 'خط و خش جزیی', 'رنگ شدگی','دوررنگ','تمام رنگ','تصادفی','اوراقی']} showInput={false}/>
                    <DropDownMenu title=" نوع سوخت" items={['دوگانه سوز دستی','دوگانه سوز شرکتی','گازوییل','بنزبن']} showInput={false}/>
                    <DropDownMenu title="تصادفی بودن" items={dropdownItems} />
                    <DropDownMenu title="موتور" items={['تعویض شده', 'نیاز به تعمیر', 'سالم']} showInput={false}/>
                    <DropDownMenu title="محل" items={dropdownItems}  showInput={true} placeholder={'محل را وارد کنید'}/>
                    <DropDownMenu title="مهلت بیمه شخص ثالث" items={dropdownItems} showInput={true} placeholder={"مثلا 7 ماه"} />
                   
                </div>              
                <div dir="ltr" className=' overflow-y-auto flex flex-row flex-wrap basis-4/5 gap-y-6 gap-x-4 content-start p-0 m-0'>
                    <AdsItem className="basis-[32%]"/>
                    <AdsItem className="basis-[32%]"/>
                    <AdsItem className="basis-[32%]"/>
                    <AdsItem className="basis-[32%]"/>
                    <AdsItem className="basis-[32%]"/>
                    <AdsItem className="basis-[32%]"/>
                    <AdsItem className="basis-[32%]"/>
                    <AdsItem className="basis-[32%]"/>
                    <AdsItem className="basis-[32%]"/>
                    <AdsItem className="basis-[32%]"/>
                    <AdsItem className="basis-[32%]"/>
                    <AdsItem className="basis-[32%]"/>
                    
                </div>
            </div>
        </div>
    </>
  )
}