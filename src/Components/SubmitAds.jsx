import { useRef, useState } from "react";
import InputForm from "./Common/InputForm";
function createBlob(e){
  return URL.createObjectURL(e.target.files[0]);
}
export default function SubmitAds() {
    const [formData, setFormData] = useState({
        city: "تهران",
        parish: "آذربایجان",
        address: "تهران",
        brand: "ایرانی",
        carColor: "سفید",
        year: "1399",
        output: "",
        price: "103",
        frame: "23",
        motor: "23",
        chassis: "42",
        chassisBack: "52",
        chassisFront: "35",
        insurance: "ندارد",
        number: "12",
        picture: '',
        video: '',
    });

    function handleFormSubmit(event) {
        event.preventDefault();
        console.log("Form submitted with data:", formData);
        // setFormData({}); 
    }

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }
    function handlePictureChange(event) {
        const imageBlob=createBlob(event);
        setFormData({
          ...formData,
          picture: imageBlob
        });
      }
      
      function handleVideoChange(event) {
        const videoBlob=createBlob(event);
        setFormData({
            ...formData,
            video: videoBlob,
        });
    }

    return (
      <div dir="rtl" className="flex flex-row items-center font-dast">
        <div className="container">
          <form className="form" onSubmit={handleFormSubmit}>
            <div>محل سکونت</div>
            <InputForm
              placeHolder={"شهر"}
              type={"city"}
              handleChange={handleChange}
              fieldkey={"city"}
              name={"city"}
              value={formData.city}
            />
            <InputForm
              placeHolder={"محله"}
              type={"parish"}
              handleChange={handleChange}
              fieldkey={"parish"}
            />
            <InputForm
              placeHolder={"آدرس"}
              type={"address"}
              handleChange={handleChange}
              fieldkey={"address"}
            />
            <div>مشخصات ظاهری</div>
            <InputForm
              placeHolder={"برند و تیپ"}
              type={"brand"}
              handleChange={handleChange}
              fieldkey={"brand"}
            />
            <InputForm
              placeHolder={"رنگ"}
              type={"carColor"}
              handleChange={handleChange}
              fieldkey={"carColor"}
            />
            <InputForm
              placeHolder={"سال تولید"}
              type={"year"}
              handleChange={handleChange}
              fieldkey={"year"}
            />
            <InputForm
              placeHolder={"کارکرد"}
              type={"output"}
              handleChange={handleChange}
              fieldkey={"output"}
            />
            <InputForm
              placeHolder={"قیمت"}
              type={"price"}
              handleChange={handleChange}
              fieldkey={"price"}
            />
            <InputForm
              placeHolder={"مشخصات بدنه"}
              type={"frame"}
              handleChange={handleChange}
              fieldkey={"frame"}
            />
            <div>مشخصات تکمیلی</div>
            <InputForm
              placeHolder={"وضعیت موتور"}
              type={"motor"}
              handleChange={handleChange}
              fieldkey={"motor"}
            />
            <InputForm
              placeHolder={"وضعیت شاسی عقب"}
              type={"chassis"}
              handleChange={handleChange}
              fieldkey={"chassis"}
            />
            <InputForm
              placeHolder={"وضعیت شاسی عقب"}
              type={"chassisBack"}
              handleChange={handleChange}
              fieldkey={"chassisBack"}
            />
            <InputForm
              placeHolder={"وضعیت شاسی جلو"}
              type={"chassisFront"}
              handleChange={handleChange}
              fieldkey={"chassisFront"}
            />
            <InputForm
              placeHolder={"مهلت بیمه شخص ثالث"}
              type={"insurance"}
              handleChange={handleChange}
              fieldkey={"insurance"}
            />
            <div>مشخصات تماس</div>
            <InputForm
              placeHolder={"شماره تماس"}
              type={"number"}
              handleChange={handleChange}
              fieldkey={"number"}
            />
            <div>آپلود عکس</div>
            <input
              type="file"
              accept="image/*"
              onChange={handlePictureChange}
            />
            <div>آپلود ویدیو</div>
            <input
              type="file"
              accept="video/*"
              onChange={handleVideoChange}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
}

