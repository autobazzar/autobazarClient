import { useState, useEffect } from 'react';
import DropDownMenu from './Common/DropDownMenu'; 
import Item from './Common/Item'; 
import Button from './Common/Button';
import { receiveAds } from '../api/api';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Checkbox from './Common/Checkbox';

export default function ShowAds() {
  const [ads, setAds] = useState([]);
  const [filteredAds, setFilteredAds] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState({
    yearRange: null,
    priceRange: null,
    disRange: null,
    InsRange: null,
    color: null,
    fuelType: null,
    engine: null,
    accidental: false,
  });
  const dropdownItems = ['Item 1', 'Item 2', 'Item 3'];
  const profile = useSelector((state) => state.profile);

  useEffect(() => {
    const fetchAds = async () => {
      try {
        const response = await receiveAds();
        setAds(response.data);
        setFilteredAds(response.data);
      } catch (error) {
        console.error('Error fetching ads data:', error);
      }
    };

    fetchAds();
  }, []);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/submit-ads");
  };

  useEffect(() => {
    applyFilters();
  }, [selectedFilters]);

  const applyFilters = () => {
    let filtered = ads;

    if (selectedFilters.yearRange) {
      filtered = filtered.filter(
        (ad) => ad.year >= selectedFilters.yearRange.startYear 
                && ad.year <= selectedFilters.yearRange.endYear
      );
    }
    if (selectedFilters.priceRange) {
      filtered = filtered.filter(
        (ad) => ad.price >= selectedFilters.priceRange.startPrice 
                && ad.price <= selectedFilters.priceRange.endPrice
      );
    }
    if (selectedFilters.InsRange) {
      filtered = filtered.filter(
        (ad) => ad.insurance >= selectedFilters.InsRange.startIns 
                && ad.insurance <= selectedFilters.InsRange.endIns
      );
    }
    if (selectedFilters.disRange) {
      filtered = filtered.filter(
        (ad) => ad.distance >= selectedFilters.disRange.startDis 
                && ad.distance <= selectedFilters.disRange.endDis
      );
    }
    if (selectedFilters.color) {
      filtered = filtered.filter((ad) => ad.color === selectedFilters.color);
    }
    if (selectedFilters.fuelType) {
      filtered = filtered.filter((ad) => ad.fuel === selectedFilters.fuelType);
    }
    if (selectedFilters.accidental) {
      filtered = filtered.filter((ad) => ad.accidental === true);
    }
    if(selectedFilters.engine) {
      filtered = filtered.filter((ad) => ad.motor === selectedFilters.engine);
    }

    setFilteredAds(filtered);
  };

  const handleYearRangeChange = (startYear, endYear) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      yearRange: { startYear, endYear },
    }));
  };

  const handlePriceRangeChange = (startPrice, endPrice) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      priceRange: { startPrice, endPrice },
    }));
  };

  const handleDisRangeChange = (startDis, endDis) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      disRange: { startDis, endDis },
    }));
  };

  const handleInsRangeChange = (startIns, endIns) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      InsRange: { startIns, endIns },
    }));
  };


  const handleColorChange = (color) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      color: color,
    }));
  };

  const handleFuelTypeChange = (fuelType) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      fuelType: fuelType,
    }));
  };

  const handleAccidentalChange = (checked) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      accidental: checked,
    }));
  };

  const handleEngineChange = (checked) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      engine: checked,
    }));
  };

  return (
    <>
      <div dir="rtl" className='h-screen flex flex-col h-full min-h-0 '>
        <div className='z-10 flex flex-row bg-white justify-center lg:justify-between items-center fixed top-12 px-16 w-full min-h-0 h-[7%] mb-0'>
          <p className='hidden lg:flex text-lg font-semibold pr-2'>فیلترها</p>
          <Button onClick={()=> handleClick()} text="آگهی بده!" className="h-[90%] w-full" />
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
            <DropDownMenu 
              title="کارکرد" 
              items={dropdownItems} 
              showInput={true} 
              type="distance"
              placeholder={'مثلا 1000 کیلومتر'} 
              onChange={handleDisRangeChange}
            />
            <DropDownMenu 
              title="قیمت" 
              items={dropdownItems} 
              showInput={true} 
              type="price"
              onChange={handlePriceRangeChange} 
            />
            {/* <DropDownMenu title="مشخصات بدنه" items={['سالم', 'خط و خش جزیی', 'رنگ شدگی', 'دوررنگ', 'تمام رنگ', 'تصادفی', 'اوراقی']} showInput={false} /> */}
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
            
            <DropDownMenu title="محل" items={dropdownItems} showInput={true} placeholder={'محل را وارد کنید'} />
            <DropDownMenu 
              title="مهلت بیمه شخص ثالث" 
              items={dropdownItems} 
              showInput={true} 
              placeholder={"مثلا 7 ماه"} 
              type="insurance"
              onChange={handleInsRangeChange}
            />
          </div>
          <div dir="ltr" className='flex flex-col w-full gap-y-6 p-0 m-0 lg:overflow-y-auto lg:flex-row lg:flex-wrap lg:basis-4/5 lg:gap-x-4 lg:content-start'>
            {filteredAds.map((ad) => (
              
              <Item
                key={ad.adId}
                className="lg:basis-[32%]"
                id={ad.adId}
                ad={ad}
                type="ad"
                isMine={profile.user_id === ad.userId}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
