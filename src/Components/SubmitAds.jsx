import { useState } from "react";
import InputForm from "./Common/InputForm";

export default function SubmitAds() {
    const [formData, setFormData] = useState({
        city: "",
        parish: "",
        address: "",
        brand: "",
        carColor: "",
        year: "",
        output: "",
        price: "",
        frame: "",
        motor: "",
        chassis: "",
        chassisBack: "",
        chassisFront: "",
        insurance: "",
        number: "",
        picture: null,
        video: null
    });

    function handleFormSubmit(event) {
        event.preventDefault();
        // submit formData to backend
        console.log("Form submitted with data:", formData);
        // You can reset the form data if needed
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
        const pictureFile = event.target.files[0];
        setFormData({
            ...formData,
            picture: pictureFile
        });
    }

    function handleVideoChange(event) {
        const videoFile = event.target.files[0];
        setFormData({
            ...formData,
            video: videoFile
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
             <input type="file" accept="image/*" onChange={handlePictureChange} />       
             
             <div>آپلود ویدیو</div>
             <input type="file" accept="video/*" onChange={handleVideoChange} />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

