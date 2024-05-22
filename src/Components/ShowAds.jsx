import React, { useState, useEffect } from 'react';
import DropDownMenu from './Common/DropDownMenu'; // Adjust the path if necessary
import AdsItem from './Common/AdsItem'; // Adjust the path if necessary
import Button from './Common/Button'; // Adjust the path if necessary
import { receiveAds } from '../api/api'; // Adjust the path if necessary

export default function ShowAds() {
  const [ads, setAds] = useState([]);
  const [filteredAds, setFilteredAds] = useState([]);
  const dropdownItems = ['Item 1', 'Item 2', 'Item 3'];
  

  useEffect(() => {
    const fetchAds = async () => {
      try {
        const response = await receiveAds();
        setAds(response.data);
        setFilteredAds(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching ads data:', error);
      }
    };

    fetchAds();
  }, []);

  const handleYearRangeChange = (startYear, endYear) => {
    const filtered = ads.filter(ad => ad.year >= startYear && ad.year <= endYear);
    setFilteredAds(filtered);
  };

  const handlePriceRangeChange = (startPrice, endPrice) => {
    const filtered = ads.filter(ad => ad.price >= startPrice && ad.price <= endPrice);
    setFilteredAds(filtered);
  };

  const handleColorChange = (color) => {
    if (color === '') {
      setFilteredAds(ads);
    } else {
      const filtered = ads.filter((ad) => ad.color === color);
      setFilteredAds(filtered);
    }
  };

  const handleAccidentalChange = (checked) => {
    
    if(checked){
      const filtered = ads.filter((ad) => {
      
      ad.accidental === true});
      setFilteredAds(filtered);
    }else{
      setFilteredAds(ads);
    }
    
  };

  return (
    <>
      <div dir="rtl" className='h-screen flex flex-col h-full min-h-0 '>
        <div className='z-10 flex flex-row bg-white justify-center lg:justify-between items-center fixed top-12 px-16 w-full min-h-0 h-[7%] mb-0'>
          <p className='hidden lg:flex text-lg font-semibold pr-2'>فیلترها</p>
          <Button text="آگهی بده!" className="h-[90%] w-full" />
        </div>
        <div className='h-[100vh] z-0 w-full flex flex-row mt-[54px] basis-3/4 px-16 pt-4'>
          <div className='hidden w-[0px] h-[0px] lg:flex lg:flex-col lg:basis-1/5'>
            <DropDownMenu title="برند و تیپ" items={['بی ام و', 'پراید', 'رانا', 'سایپا', 'پژو']} showInput={false} />
            <DropDownMenu
                title="رنگ"
                items={['سفید', 'مشکی', 'نقره‌ای', 'آبی', 'قرمز', 'زرد', 'سبز', 'خاکستری', 'بنفش', 'قهوه‌ای']}
                showInput={false}
                type="color"
                onChange={handleColorChange}
            />
            <DropDownMenu 
              title="سال تولید" 
              items={dropdownItems} 
              showInput={true}  
              type="year" 
              onChange={handleYearRangeChange} 
            />
            <DropDownMenu title="کارکرد" items={dropdownItems} showInput={true} placeholder={'مثلا 1000 کیلومتر'} />
            <DropDownMenu 
              title="قیمت" 
              items={dropdownItems} 
              showInput={true} 
              type="price"
              onChange={handlePriceRangeChange} 
            />
            <DropDownMenu title="مشخصات بدنه" items={['سالم', 'خط و خش جزیی', 'رنگ شدگی', 'دوررنگ', 'تمام رنگ', 'تصادفی', 'اوراقی']} showInput={false} />
            <DropDownMenu title="نوع سوخت" items={['دوگانه سوز دستی', 'دوگانه سوز شرکتی', 'گازوییل', 'بنزین']} showInput={false} />
            <DropDownMenu 
             
             title="تصادفی بودن"
             items={dropdownItems} 
             type="accidental"
             onChange={handleAccidentalChange}
            />
            <DropDownMenu title="موتور" items={['تعویض شده', 'نیاز به تعمیر', 'سالم']} showInput={false} />
            <DropDownMenu title="محل" items={dropdownItems} showInput={true} placeholder={'محل را وارد کنید'} />
            <DropDownMenu title="مهلت بیمه شخص ثالث" items={dropdownItems} showInput={true} placeholder={"مثلا 7 ماه"} />
          </div>
          <div dir="ltr" className='flex flex-col w-full gap-y-6 p-0 m-0 lg:overflow-y-auto lg:flex-row lg:flex-wrap lg:basis-4/5 lg:gap-x-4 lg:content-start'>
            {filteredAds.map((ad) => (
              <AdsItem
                key={ad.adId}
                className="lg:basis-[32%]"
                carName={ad.carName}
                distance={ad.distance}
                price={ad.price}
                picsUrl={ad.picsUrl}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
