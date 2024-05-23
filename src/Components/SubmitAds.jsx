import { useState } from "react";
import InputForm from "./Common/InputForm";
import IconButton from "./Common/IconButton";
import { ImStatsDots } from "react-icons/im";

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

    async function handleFormSubmit(event) {
        event.preventDefault();

        const data = new FormData();
        for (const key in formData) {
            data.append(key, formData[key]);
        }

        try {
            const response = await fetch('https://your-backend-endpoint.com/api/submit', {
                method: 'POST',
                body: data
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            console.log('Form successfully submitted:', result);

            // Optionally reset the form
            // setFormData({
            //     city: "",
            //     parish: "",
            //     address: "",
            //     brand: "",
            //     carColor: "",
            //     year: "",
            //     output: "",
            //     price: "",
            //     frame: "",
            //     motor: "",
            //     chassis: "",
            //     chassisBack: "",
            //     chassisFront: "",
            //     insurance: "",
            //     number: "",
            //     picture: null,
            //     video: null
            // });

        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
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
        <div dir="rtl" className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
                <form className="space-y-4" onSubmit={handleFormSubmit}>
                    <h2 className="text-2xl font-bold mb-4">ثبت آگهی</h2>
                    <div className="text-lg font-semibold">محل سکونت</div>
                    <InputForm
                        placeHolder={"شهر"}
                        type={"text"}
                        handleChange={handleChange}
                        fieldkey={"city"}
                        name={"city"}
                        value={formData.city}
                        className="w-full"
                    />
                    <InputForm
                        placeHolder={"محله"}
                        type={"text"}
                        handleChange={handleChange}
                        fieldkey={"parish"}
                        name={"parish"}
                        value={formData.parish}
                        className="w-full"
                    />
                    <InputForm
                        placeHolder={"آدرس"}
                        type={"text"}
                        handleChange={handleChange}
                        fieldkey={"address"}
                        name={"address"}
                        value={formData.address}
                        className="w-full"
                    />
                    <div className="text-lg font-semibold">مشخصات ظاهری</div>
                    <InputForm
                        placeHolder={"برند و تیپ"}
                        type={"text"}
                        handleChange={handleChange}
                        fieldkey={"brand"}
                        name={"brand"}
                        value={formData.brand}
                        className="w-full"
                    />
                    <InputForm
                        placeHolder={"رنگ"}
                        type={"text"}
                        handleChange={handleChange}
                        fieldkey={"carColor"}
                        name={"carColor"}
                        value={formData.carColor}
                        className="w-full"
                    />
                    <InputForm
                        placeHolder={"سال تولید"}
                        type={"number"}
                        handleChange={handleChange}
                        fieldkey={"year"}
                        name={"year"}
                        value={formData.year}
                        className="w-full"
                    />
                    <InputForm
                        placeHolder={"کارکرد"}
                        type={"number"}
                        handleChange={handleChange}
                        fieldkey={"output"}
                        name={"output"}
                        value={formData.output}
                        className="w-full"
                    />
                    <InputForm
                        placeHolder={"قیمت"}
                        type={"number"}
                        handleChange={handleChange}
                        fieldkey={"price"}
                        name={"price"}
                        value={formData.price}
                        className="w-full"
                    />
                    <InputForm
                        placeHolder={"مشخصات بدنه"}
                        type={"text"}
                        handleChange={handleChange}
                        fieldkey={"frame"}
                        name={"frame"}
                        value={formData.frame}
                        className="w-full"
                    />
                    <div className="text-lg font-semibold">مشخصات تکمیلی</div>
                    <InputForm
                        placeHolder={"وضعیت موتور"}
                        type={"text"}
                        handleChange={handleChange}
                        fieldkey={"motor"}
                        name={"motor"}
                        value={formData.motor}
                        className="w-full"
                    />
                    <InputForm
                        placeHolder={"وضعیت شاسی"}
                        type={"text"}
                        handleChange={handleChange}
                        fieldkey={"chassis"}
                        name={"chassis"}
                        value={formData.chassis}
                        className="w-full"
                    />
                    <InputForm
                        placeHolder={"وضعیت شاسی عقب"}
                        type={"text"}
                        handleChange={handleChange}
                        fieldkey={"chassisBack"}
                        name={"chassisBack"}
                        value={formData.chassisBack}
                        className="w-full"
                    />
                    <InputForm
                        placeHolder={"وضعیت شاسی جلو"}
                        type={"text"}
                        handleChange={handleChange}
                        fieldkey={"chassisFront"}
                        name={"chassisFront"}
                        value={formData.chassisFront}
                        className="w-full"
                    />
                    <InputForm
                        placeHolder={"مهلت بیمه شخص ثالث"}
                        type={"text"}
                        handleChange={handleChange}
                        fieldkey={"insurance"}
                        name={"insurance"}
                        value={formData.insurance}
                        className="w-full"
                    />
                    <div className="text-lg font-semibold">مشخصات تماس</div>
                    <InputForm
                        placeHolder={"شماره تماس"}
                        type={"text"}
                        handleChange={handleChange}
                        fieldkey={"number"}
                        name={"number"}
                        value={formData.number}
                        className="w-full"
                    />
                    <div className="text-lg font-semibold">آپلود عکس</div>
                    <input type="file" accept="image/*" onChange={handlePictureChange} className="w-full mb-4" />
                    <div className="text-lg font-semibold">آپلود ویدیو</div>
                    <input type="file" accept="video/*" onChange={handleVideoChange} className="w-full mb-4" />
                    <button
                        type="submit"
                        className="flex items-center justify-center bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-200"
                    >
                        <ImStatsDots className="mr-2" />
                        ثبت آگهی
                    </button>
                </form>
            </div>
        </div>
    );
}
