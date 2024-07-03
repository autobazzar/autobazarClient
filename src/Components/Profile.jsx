import Button from './Common/Button';
import { useSelector } from 'react-redux';
import { MdOutlineEdit } from "react-icons/md";
import { LuFolderArchive } from "react-icons/lu";
import { RxExit } from "react-icons/rx";
import { IoSearchOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import Item from './Common/Item';
import { useState, useEffect } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { persistor } from "../store/store";
import { receiveAdsById } from '../api/api';
import EditProfile from './EditProfile';

export default function Profile() {
  const profile = useSelector((state) => state.profile);
  const navigate = useNavigate();
  const [state, setState] = useState({
    state_count: 1
  });
  const [searchTerm, setSearchTerm] = useState('');
  const handleItemClick = (count) => {
    setState({ state_count: count });
    if (count === 4) {
      persistor.purge();
      navigate("/");
    }
  };
  const [ads, setAds] = useState([]);

  useEffect(() => {
    const fetchAds = async () => {
      try {
        const response = await receiveAdsById(profile.user_id);
        setAds(response.data);
      } catch (error) {
        console.error('Error fetching ads data:', error);
      }
    };

    fetchAds();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const filteredAds = ads.filter((ad) =>
      ad.carName.toLowerCase().startsWith(searchTerm.toLowerCase())
    );
    setAds(filteredAds);
  };

  return (
    <div dir="rtl" className='flex flex-row h-screen'>
      <div className='bg-[#2b4e47] med:rounded-bl-[4rem] med:basis-[28%] w-full flex flex-col gap-y-12 h-[92.5%]'>
        <button onClick={() => handleItemClick(0)} onKeyDown={() => handleItemClick(0)} className={`cursor-pointer flex flex-row justify-start med:justify-between items-center hover:bg-[#465956] ${state.state_count === 0 && "bg-[#4C857A]" }`}>
          <MdOutlineEdit color='white' className="med:hidden h-12 w-12 pr-4" />
          <div>
            <p className='text-xl text-right font-semibold text-white pr-5 pt-3 mb-2'>{profile.userName}</p>
            <p className='text-white mr-5 pb-3'>{profile.email}</p>
          </div>
          <MdOutlineEdit color='white'  className="hidden med:block h-12 w-12 ml-5" />
        </button>
        <button onClick={() => handleItemClick(1)} onKeyDown={() => handleItemClick(1)} className={`cursor-pointer flex flex-row justify-start med:justify-between items-center hover:bg-[#465956] ${state.state_count === 1 && "bg-[#4C857A]" }`}>
          <LuFolderArchive color='white' className="med:hidden h-12 w-12 pr-4" />
          <div>
            <p className='text-xl font-semibold text-white m-5'>آگهی های من</p>
          </div>
          <LuFolderArchive color='white' className="hidden med:block h-12 w-12 ml-5" />
        </button>
        <button onClick={() => handleItemClick(2)} onKeyDown={() => handleItemClick(2)} className={`cursor-pointer flex flex-row justify-start med:justify-between items-center hover:bg-[#465956] ${state.state_count === 2 && "bg-[#4C857A]" }`}>
          <FaPlus color='white' className="med:hidden h-12 w-12 ml-5 pr-4" />
          <div>
            <p className='text-xl font-semibold text-white m-5'>ثبت آگهی</p>
          </div>
          <FaPlus color='white' className="hidden med:block h-12 w-12 ml-5" />
        </button>
        <button onClick={() => handleItemClick(3)} onKeyDown={() => handleItemClick(3)} className={`cursor-pointer flex flex-row justify-start med:justify-between items-center hover:bg-[#465956] ${state.state_count === 3 && "bg-[#4C857A]" }`}>
          <IoSearchOutline color='white' className="med:hidden h-12 w-12 ml-5 pr-4" />
          <div>
            <p className='text-xl font-semibold text-white m-5'>بازارگردی</p>
          </div>
          <IoSearchOutline color='white' className="hidden med:block h-12 w-12 ml-5" />
        </button>
        <button onClick={() => handleItemClick(4)} onKeyDown={() => handleItemClick(4)} className={`cursor-pointer flex flex-row justify-start med:justify-between items-center hover:bg-[#465956] ${state.state_count === 4 && "bg-[#4C857A]" }`}>
          <RxExit color='white' className="med:hidden h-12 w-12 ml-5 pr-4" />
          <div>
            <p className='text-xl font-semibold text-white m-5'>خروج</p>
          </div>
          <RxExit color='white' className="hidden med:block h-12 w-12 ml-5" />
        </button>
      </div>

      <div className='hidden med:block med:basis-[72%] mt-5 pr-16'>
        {state.state_count === 0 && <EditProfile />}
        {state.state_count === 1 && (
          <>
            <form className="w-[37%] mb-8" onSubmit={handleSearch}>
              <div className="relative min-h-0 h-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                  </svg>
                </div>
                <input type="search" id="default-search" className="block w-full h-[42px] p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#2b4e47] focus:border-[#2b4e47]" placeholder="آگهیت رو جستجو کن!" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} required />
                <Button type="submit" text="جستجو" className='h-[82%] !w-1/4 shadow-2xl text-sm text-white text-center absolute end-2.5 bottom-1 focus:ring-4 focus:outline-none rounded-lg text-sm' />
              </div>
            </form>
            {ads.length === 0 ? (
              <div className="flex items-center justify-center h-[60vh]">
                <Button
                  text="اولین آگهیتو بده!"
                  onClick={() => navigate('/submit-ads')}
                  className="h-[60px] !w-1/6 shadow-2xl text-sm text-white text-center bg-[#2b4e47] focus:ring-4 focus:outline-none rounded-lg"
                />
              </div>
            ) : (
              <div dir='rtl' className='overflow-y-auto flex flex-row flex-wrap gap-y-6 gap-x-4 content-start p-0'>
                {ads.map((ad) => (
                  <Item
                    key={ad.adId}
                    className="lg:basis-[32%]"
                    id={ad.adId}
                    ad={ad}
                    type="ad"
                    isMine="true"
                  />
                ))}
              </div>
            )}
          </>
        )}
        {state.state_count === 3 && <Navigate to='/show-ads' />}
        {state.state_count === 2 && <Navigate to='/submit-ads' />}
      </div>
    </div>
  );
}
