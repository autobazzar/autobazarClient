import React, { useCallback, useRef } from "react";
import { ImStatsDots } from "react-icons/im";
import { submitAds } from "../api/api";
import { dataToTransfer } from "../utils/initialSubmitData";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function SubmitAds() {
  const {user_id} =useSelector(state=>state.profile);
  const formData = useRef({
    technicalInfo: "اطلاعات فنی جدید درباره آگهی.",
    address: "تهران ض=ق 123",
    mobileNum: "123-456-7890",
    city: "شهر جدید",
    carName: "هوندا سیویک",
    picsUrl: "http://example.com/newpic.jpg",
    additionalInfo: "اطلاعات اضافی جدید درباره آگهی.",
    price: 12000,
    date: "2024-06-17",
    year: 2023,
    status: 1,
    model: "مدل جدید",
    videoUrl: "http://example.com/newvideo.mp4",
    brand: "برند جدید",
    color: "آبی",
    distance: 20000,
    accidental: false,
    insurance: 2,
    motor: "توربو",
    fuel: "گازسوز",
    userId: 456,
  });
const navigate=useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
        console.error(formData);
      await submitAds({...formData.current,user_id});
      navigate('/show-ads')
    
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleChange = useCallback((e, key) => {
    formData.current = {
      ...formData.current,
      [key]: e.target.value,
    };
  }, []);

  function handlePictureChange(event) {
    const pictureFile = event.target.files[0];
    const pitcureBlobl = URL.createObjectURL(pictureFile);
    formData.current = {
      ...formData.current,
      picsUrl: pitcureBlobl,
    };
  }

  function handleVideoChange(event) {
    const videoFile = event.target.files[0];
    const videoBlobl = URL.createObjectURL(videoFile);
    formData.current = {
      ...formData.current,
      videoUrl: videoBlobl,
    };
  }

  return (
    <div
      dir="rtl"
      className="flex justify-center items-center min-h-screen bg-gray-100"
    >
      <div className="bg-[#4C857A] p-6 rounded-lg shadow-lg w-full max-w-lg">
        <form className="space-y-4 flex flex-col" onSubmit={handleSubmit}>
          {/* <input type="text" placeholder="" /> */}
          <h2 className="text-2xl font-bold mb-4 text-white">ثبت آگهی</h2>
          {/* <div className="text-lg font-semibold text-white">محل سکونت</div> */}
          {dataToTransfer.map((item) =>
            React.createElement(item.type, {
              onChange(e) {
                handleChange(e, item.name);
              },
              ...item.props,
              key: item.name,
              className: `input-form ${item.className}`,
            })
          )}
          <div className="text-lg font-semibold text-white">آپلود عکس</div>
          <input
            type="file"
            accept="image/*"
            onChange={handlePictureChange}
            className="w-full mb-4 text-white"
          />
          <div className="text-lg font-semibold text-white">آپلود ویدیو</div>
          <input
            type="file"
            accept="video/*"
            onChange={handleVideoChange}
            className="w-full mb-4 text-white"
          />
          <button
            type="submit"
            className="flex items-center justify-center  bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-200"
          >
            <ImStatsDots className="mr-2" />
            ثبت آگهی
          </button>
        </form>
      </div>
    </div>
  );
}
