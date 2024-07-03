import { useRef, useState } from "react";
import { string, number } from "prop-types";
import { submitComment, submitScore } from "../../api/api";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { prettyString } from "../../utils/prettyString";
export default function StarPicker({user_id, ad_id}) {
    const profile = useSelector((state) => state.profile);
    const [choosenStar,setChoosenStar]= useState(-1);
    const commentDesc=useRef(null);
    const handleSubmit = async () => {
      if ("user_id" in profile) {
        if (choosenStar != -1) {
          const payload = {
            score: choosenStar,
            userId: user_id,
            adId: ad_id,
          };

          await submitScore(payload);
        }
        const comment=commentDesc.current.value
        if(comment){
          const commentPayload = {
            comment,
            userId: user_id,
            adId: ad_id,
            score:choosenStar,
          };

          await submitComment(commentPayload);
          window.location.reload();

        }
      } else {
        toast.error(prettyString("لطفا ابتدا وارد شوید و یا ثبت نام کنید."));
      }
    };
  return (
    <div className="flex flex-col gap-2 justify-center  relative">
      <textarea ref={commentDesc} className="outline-none resize-none px-2 border-[1px] border-gray-200 rounded-md mt-[3px]" name="" id=""></textarea>
      <div dir="rtl" className="flex flex-row gap-2 justify-center mt-1">
        {[1, 2, 3, 4, 5].map((value) => (
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

      <button
        onClick={handleSubmit}
        onKeyDown={handleSubmit}
        className="border-[1px] border-gray-400 bg-white hover:text-white hover:bg-[#2b4e47] w-fit self-center py-1 px-10 text-gray-700 rounded-lg shadow-xl"
      >
        ثبت نظر
      </button>
    </div>
  );
}

StarPicker.propTypes = {
  ad_id:string,
  user_id: number,
  
};
