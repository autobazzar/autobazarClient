import { useCallback, useEffect, useRef, useState } from "react";
import { submitAds, receiveAd, editAd } from "../api/api";
import { dataToTransfer } from "../utils/initialSubmitData";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import InputField from "./Common/InputField";
import { properData } from "../utils/date";
import FileInput from "./Common/FileInput";
import { toBase64 } from "../utils/fileConvert";
import PureDropDown from "./PureDropDown";

export default function EditAd() {
  const { user_id } = useSelector((state) => state.profile);
  const { id } = useParams();
  const [adDetails, setAdDetails] = useState(null);

  const formData = useRef({
    videoUrl: "",
    picsUrl: "",
    status: 1,
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      // Fetch the ad details and pre-fill the form
      const fetchAdDetails = async () => {
        try {
          const response = await receiveAd(id);
          setAdDetails(response.data);
          // Pre-fill the form with the ad details
          formData.current = response.data;
        } catch (error) {
          console.error("Error fetching ad details:", error);
        }
      };
      fetchAdDetails();
    }
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = properData(formData.current, user_id);
    try {
      await editAd(data, id);
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
    setAdDetails({ ...adDetails, [key]: value }); // Update the state to re-render the component
  }, [adDetails]);

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
    const value = adDetails ? adDetails[item.name] : "";
    switch (item.type) {
      case "h2":
        return (
          <h2
            className="text-2xl font-semibold text-[#2b4e47] lg:text-black border-b-2 lg:w-[30%] w-full text-center lg:text-right font-dast"
            key={item.title}
          >
            {item.title}
          </h2>
        );
      case "input":
      case "textarea":
        return (
          <InputField key={item.name} item={item} handleChange={handleChange} value={value} />
        );
      case "custom":
        switch (item.customComponent) {
          case "DropDownMenu":
            const { items, title } = item.props;
            return (
              <PureDropDown
                items={items}
                title={title}
                handleChange={handleChange}
                name={item.name}
                selectedValue={value}
              />
            );
        }
    }
  }

  if (!adDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div dir="rtl" className="w-full">
      <form className="space-y-4 flex flex-col lg:w-[60%] w-full" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-4 text-white font-dast">
          ویرایش آگهی
        </h2>
        {dataToTransfer.map((item) => renderItem(item))}
        <div className="text-lg font-semibold text-white">آپلود عکس</div>

        <FileInput
          type={"img"}
          handleChange={handlePictureChange}
          title={"افزودن تصویر"}
          accept={"image/*"}
          initialSrc={formData.current.picsUrl} // Pass initial image source
        />
        <div className="text-lg font-semibold text-white">آپلود ویدیو</div>
        <FileInput
          type={"video"}
          handleChange={handleVideoChange}
          title={"افزودن ویدیو"}
          accept={"video/*"}
          initialSrc={formData.current.videoUrl} // Pass initial video source
        />

        <button
          type="submit"
          className="flex items-center justify-center bg-[#2B4E47] text-white py-2 px-4 rounded-lg"
        >
          ویرایش آگهی
        </button>
      </form>
    </div>
  );
}
