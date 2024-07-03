import { useState, useEffect } from 'react';
import DropDownMenu from './Common/DropDownMenu'; 
import Item from './Common/Item'; 
import Button from './Common/Button';
import { receiveAds } from '../api/api';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Checkbox from './Common/Checkbox';
import DropDownMenus from './DropDownMenus';
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
    location: null,
    carName: null
  });
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
      if(selectedFilters.location){
        filtered = filtered.filter((ad) => ad.address.toLowerCase().startsWith(selectedFilters.location));
      }
      if(selectedFilters.carName){
        filtered = filtered.filter((ad) => ad.carName.toLowerCase().startsWith(selectedFilters.carName));
      }
  
      setFilteredAds(filtered);
    };
    applyFilters();
  }, [selectedFilters, ads]);

  

  const handleYearRangeChange = (startYear, endYear) => {
    if(startYear !== "" && endYear !== ""){
        setSelectedFilters((prevFilters) => ({
          ...prevFilters,
          yearRange: { startYear, endYear },
        }));
    }else{
      setSelectedFilters((prevFilters) => ({
        ...prevFilters,
        yearRange: { startYear : 0, endYear : Number.POSITIVE_INFINITY },
      }));
    }
  };

  const handlePriceRangeChange = (startPrice, endPrice) => {
    if(startPrice !== "" && endPrice !== ""){
        setSelectedFilters((prevFilters) => ({
          ...prevFilters,
          priceRange: { startPrice, endPrice },
        }));
    }else{
      setSelectedFilters((prevFilters) => ({
        ...prevFilters,
        priceRange: { startPrice : 0, endPrice : Number.POSITIVE_INFINITY },
      }));
    }
  };

  const handleDisRangeChange = (startDis, endDis) => {
    if(startDis !== "" && endDis !== ""){
      setSelectedFilters((prevFilters) => ({
        ...prevFilters,
        disRange: { startDis, endDis },
      }));
    }else{
      setSelectedFilters((prevFilters) => ({
        ...prevFilters,
        disRange: { startDis : 0, endDis : Number.POSITIVE_INFINITY },
      }));
    }
  };

  const handleInsRangeChange = (startIns, endIns) => {
    if(startIns !== "" && endIns !== ""){
      setSelectedFilters((prevFilters) => ({
        ...prevFilters,
        InsRange: { startIns, endIns },
      }));
    }else{
      setSelectedFilters((prevFilters) => ({
        ...prevFilters,
        InsRange: { startIns : 0, endIns : Number.POSITIVE_INFINITY },
      }));
    }
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

  const handleLocationChange = (location) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      location: location,
    }));
  };

  const handleCarNameChange = (carName) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      carName: carName,
    }));
  };


  return (
    <>
      <div dir="rtl" className='h-screen flex flex-col h-full min-h-0'>
        <div className='z-10 flex flex-col lg:flex-row bg-white justify-center gap-2 lg:justify-between items-center lg:fixed lg:top-12 pt-80 mb-64 lg:pt-0 lg:mt-0 lg:mb-0 px-16 w-full min-h-0 h-[50%] lg:h-[7%]'>
          <p className='hidden lg:flex text-lg font-semibold pr-2'>فیلترها</p>
          <Button onClick={()=> handleClick()} text="آگهی بده!" className="h-full min-h-0 w-full" />
          <p className='lg:hidden text-lg font-semibold'>فیلترها</p>
          <div className='w-full lg:hidden'>
            <DropDownMenus
                handleAccidentalChange={handleAccidentalChange}
                handleCarNameChange={handleCarNameChange}
                handleColorChange={handleColorChange}
                handleDisRangeChange={handleDisRangeChange}
                handleEngineChange={handleEngineChange}
                handleFuelTypeChange={handleFuelTypeChange}
                handleInsRangeChange={handleInsRangeChange}
                handleLocationChange={handleLocationChange}
                handlePriceRangeChange={handlePriceRangeChange}
                handleYearRangeChange={handleYearRangeChange}
              
              />
          </div>
        </div>
        <div className='lg:h-[100vh] z-0 w-full flex flex-row mt-[54px] lg:basis-3/4 px-16 pt-4'>
          <div className='hidden w-[0px] h-[0px] lg:flex lg:flex-col lg:basis-1/5'>
            <DropDownMenus
              handleAccidentalChange={handleAccidentalChange}
              handleCarNameChange={handleCarNameChange}
              handleColorChange={handleColorChange}
              handleDisRangeChange={handleDisRangeChange}
              handleEngineChange={handleEngineChange}
              handleFuelTypeChange={handleFuelTypeChange}
              handleInsRangeChange={handleInsRangeChange}
              handleLocationChange={handleLocationChange}
              handlePriceRangeChange={handlePriceRangeChange}
              handleYearRangeChange={handleYearRangeChange}
            
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
