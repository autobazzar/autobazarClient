import { useState } from "react";
import { string, number } from "prop-types";
import { submitScore } from "../../api/api";
export default function StarPicker({user_id, ad_id}) {
    const [choosenStar,setChoosenStar]= useState(-1);
    const handleSubmit = async () => {
      const payload = {
          score: choosenStar,
          userId: user_id,
          adId: ad_id
      };
      
      console.log(payload);
      await submitScore(payload);
      window.location.reload();
  };
  return (
    <div className="flex flex-col gap-2 justify-center">

    <div dir="rtl" className="flex flex-row gap-2 justify-center mt-5">
      {[1,2,3,4,5]
        .map((value) => (
            <button
            key={value}
            onClick={() => {
                setChoosenStar(value);
            }}
            className={`cursor-pointer ${
                value > choosenStar ? "text-gray-400" : "text-yellow-400"
            }`}
            >
            &#9733;
          </button>
        ))}
        </div>
        <button onClick={handleSubmit} onKeyDown={handleSubmit} className="border-[1px] border-gray-400 bg-white hover:text-white hover:bg-[#2b4e47] w-fit self-center py-1 px-10 text-gray-700 rounded-lg shadow-xl">ثبت امتیاز</button>
    </div>
  );
}

StarPicker.propTypes = {
  ad_id:string,
  user_id: number,
  
};
