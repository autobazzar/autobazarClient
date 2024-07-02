import { useCallback, useRef } from "react";
import { submitAds } from "../api/api";
import { dataToTransfer } from "../utils/initialSubmitData";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import InputField from "./Common/InputField";
import { properData } from "../utils/date";
import FileInput from "./Common/FileInput";
import { toBase64 } from "../utils/fileConvert";
import PureDropDown from "./PureDropDown";

export default function SubmitAds() {
  const { user_id } = useSelector((state) => state.profile);

  const formData = useRef({
    videoUrl: "",
    picsUrl: "",
    status: 1,
  });
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = properData(formData.current, user_id);
    try {
      console.error(data);
      await submitAds(data);
      navigate("/show-ads");
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

  async function handlePictureChange(Data) {
    const base64 = await toBase64(Data);
    formData.current = {
      ...formData.current,
      picsUrl: base64,
    };
  }

  async function handleVideoChange(file) {
    const data = URL.createObjectURL(file);
    formData.current = {
      ...formData.current,
      videoUrl: data,
    };
  }

  function renderItem(item) {
    switch (item.type) {
      case "h2":
        return (
          <h2
            className="text-2xl font-semibold border-b-2 w-[30%] font-dast"
            key={item.title}
          >
            {item.title}
          </h2>
        );
      case "input":
      case "textarea":
        return (
          <InputField key={item.name} item={item} handleChange={handleChange} />
        );
      case "custom":
        switch (item.customComponent) {
          case "DropDownMenu":
            // eslint-disable-next-line no-case-declarations
            const { items, title, } = item.props;
            console.error(items,item);
            return (
              <PureDropDown
               items={items}
               title={title}
               handleChange={handleChange}
               name={item.name}
              />
            );
        }
    }
  }
  return (
    <div dir="rtl" className="w-full items-center justify-center">
      <form className="space-y-4 flex flex-col w-[60%]" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-4 text-white font-dast">
          ثبت آگهی
        </h2>
        {dataToTransfer.map((item) => renderItem(item))}
        <div className="text-lg font-semibold text-white">آپلود عکس</div>

        <FileInput
          type={"img"}
          handleChange={handlePictureChange}
          title={"افزودن تصویر"}
          accept={"image/*"}
        />
        <div className="text-lg font-semibold text-white">آپلود ویدیو</div>
        <FileInput
          type={"video"}
          handleChange={handleVideoChange}
          title={"افزودن ویدیو"}
          accept={"video/*"}
        />

        <button
          type="submit"
          className="flex items-center justify-center  bg-[#2B4E47] text-white py-2 px-4 rounded-lg"
        >
          ثبت آگهی
        </button>
      </form>
    </div>
  );
}
