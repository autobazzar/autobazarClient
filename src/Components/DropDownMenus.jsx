import React from 'react'
import DropDownMenu from './Common/DropDownMenu'
import Checkbox from './Common/Checkbox'
export default function DropDownMenus({handleCarNameChange, handleAccidentalChange
    , handleColorChange, handleDisRangeChange,
     handleEngineChange, handleFuelTypeChange
     , handleInsRangeChange, handleLocationChange, handlePriceRangeChange
    , handleYearRangeChange}) {
    
  return (
    <>
            <DropDownMenu 
              title="برند و تیپ" 
              items={['بی ام و', 'پراید', 'رانا', 'سایپا', 'پژو']} 
              showInput={false} 
              type="carName"
              onChange={handleCarNameChange}
            />
            <DropDownMenu
                title="رنگ"
                items={['سفید', 'مشکی', 'نقره‌ای', 'آبی', 'قرمز', 'زرد', 'سبز', 'خاکستری', 'بنفش', 'قهوه‌ای']}
                showInput={false}
                type="color"
                onChange={handleColorChange}
            />
            <DropDownMenu 
              title="سال تولید"  
              showInput={true}  
              type="year" 
              onChange={handleYearRangeChange} 
            />
            <DropDownMenu 
              title="کارکرد" 
              showInput={true} 
              type="distance"
              placeholder={'مثلا 1000 کیلومتر'} 
              onChange={handleDisRangeChange}
            />
            <DropDownMenu 
              title="قیمت" 
              showInput={true} 
              type="price"
              onChange={handlePriceRangeChange} 
            />
            <DropDownMenu 
              title="نوع سوخت" 
              items={['دوگانه سوز دستی', 'دوگانه سوز شرکتی', 'گازوییل', 'بنزین']} 
              showInput={false} 
              type="fuel"
              onChange={handleFuelTypeChange}
            />
            <Checkbox 
              text="تصادفی بودن" 
              onChange={handleAccidentalChange}
            />

            <DropDownMenu 
              title="موتور" 
              items={['تعویض شده', 'نیاز به تعمیر', 'سالم']} 
              showInput={false} 
              type="engine"
              onChange={handleEngineChange}
            />
            
            <DropDownMenu 
              title="محل" 
              showInput={true} 
              placeholder={'محل را وارد کنید'}
              type="location"
              onChange={handleLocationChange}
            />
            <DropDownMenu 
              title="مهلت بیمه شخص ثالث" 
              showInput={true} 
              placeholder={"مثلا 7 ماه"} 
              type="insurance"
              onChange={handleInsRangeChange}
            />
    </>
  )
}
