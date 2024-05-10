import { useState } from "react";
import InputForm from "./Common/InputForm";

export default function SubmitAds() {
    const [formData, setFormData] = useState({
        city: "",
        parish: "",
        address: "",
        brand: "",
        color: "",
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
        <div className="flex flex-row items-center font-dast">
            <div className="container">
                <form className="form" onSubmit={handleFormSubmit}>
                    <span>محل سکونت</span>
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
            <span>مشخصات ظاهری</span>
            <InputForm
              placeHolder={"برند و تیپ"}
              type={"brand"}
              handleChange={handleChange}
              fieldkey={"brand"}
            />
             <InputForm
              placeHolder={"رنگ"}
              type={"color"}
              handleChange={handleChange}
              fieldkey={"color"}
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
            <span>مشخصات تکمیلی</span>
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
            <span>مشخصات تماس</span>
            <InputForm
              placeHolder={"شماره تماس"}
              type={"number"}
              handleChange={handleChange}
              fieldkey={"number"}
            />
             <span>آپلود عکس</span>
             <input type="file" accept="image/*" onChange={handlePictureChange} />       
             
             <span>آپلود ویدیو</span>
             <input type="file" accept="video/*" onChange={handleVideoChange} />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

