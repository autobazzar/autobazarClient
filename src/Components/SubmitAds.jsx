import { useCallback, useRef, useState } from "react";
import { ImStatsDots } from "react-icons/im";
import { submitAds } from "../api/api";
import { dataToTransfer } from "../utils/initialSubmitData";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import InputField from "./Common/InputField";
import { properData } from "../utils/date";
import FileInput from "./Common/FileInput";

export default function SubmitAds() {
  const { user_id } = useSelector((state) => state.profile);

  const formData = useRef({
    accidental: false,
    insurance: 1,
  });
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data=properData(formData.current,user_id);
    try {
        console.error(data);
      await submitAds(data);
      navigate('/show-ads')
    
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleChange = useCallback((value, key) => {
    formData.current = {
      ...formData.current,
      [key]: value,
    };
  }, []);

  function handlePictureChange(blobData) {
    formData.current = {
      ...formData.current,
      picsUrl: blobData,
    };
  }

  function handleVideoChange(blobData) {
    formData.current = {
      ...formData.current,
      videoUrl: blobData,
    };
  }

  return (
    <div
      dir="rtl"
      className="flex justify-center items-center min-h-screen bg-gray-100"
    >
      <div className="bg-[#4C857A] p-6 rounded-lg shadow-lg w-full max-w-lg">
        <form className="space-y-4 flex flex-col" onSubmit={handleSubmit}>
          <h2 className="text-2xl font-bold mb-4 text-white">ثبت آگهی</h2>
          {dataToTransfer.map((item) => (
            <InputField
              key={item.name}
              item={item}
              handleChange={handleChange}
            />
          ))}
          <div className="text-lg font-semibold text-white">آپلود عکس</div>
          {/* <input
            type="file"
            accept="image/*"
            onChange={handlePictureChange}
            className="w-full mb-4 text-white"
          /> */}
          <FileInput type={'img'} handleChange={handlePictureChange} title={'افزودن تصویر'} accept={"image/*"} />
          <div className="text-lg font-semibold text-white">آپلود ویدیو</div>
          <FileInput type={'video'} handleChange={handleVideoChange} title={'افزودن ویدیو'} accept={"video/*"} />
          {/* <input
            type="file"
            accept="video/*"
            onChange={handleVideoChange}
            className="w-full mb-4 text-white"
          /> */}
          <button
            type="submit"
            className="flex items-center justify-center  bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-200"
          >
            ثبت آگهی
          </button>
        </form>
      </div>
    </div>
  );
}
