import { bool, func, object } from "prop-types";
import Modal from "./Common/Modal";
import { detailKeys } from "../utils/const";
import InfinitySlider from "./Common/InfinitySlider";
import StarPicker from "./Common/StarPicker";
import { CgClose } from "react-icons/cg";

export default function Detail({isOpen,handleClose,detail}) {
  const renderText=()=>{
    return `امتیاز ${detail.numberOfScores} از مجموع`
  }
  return (
    <>
      <Modal isOpen={isOpen} handleClose={handleClose}>
        <button onClick={handleClose}>
          <CgClose />
        </button>
        <div dir="rtl" className="flex flex-row gap-5">
          <div className="detail">
            <div className="flex flex-col items-end">
              <h1 className="w-full text-start text-3xl font-bold detail-border pb-5 mb-5">
                دنا تیپ یک
              </h1>
              <h3 className="w-full text-start detail-border pb-3 text-gray-600">
                لحظاتی پیش در تهران , یافت آباد
              </h3>
              <div
                dir="rtl"
                className="flex pt-7 pb-5 flex-row justify-between gap-5"
              >
                <button className="p-2 w-[10rem] text-nowrap rounded-xl bg-[var(--buttons-color)] text-white shadow-lg shadow-gray-200">
                  اطلاعات تماس
                </button>
                <button className="p-2 w-[10rem] rounded-xl border-[1px] border-gray-700 shadow-md shadow-gray-400">
                  ایمیل
                </button>
              </div>
            </div>
            <div className="flex flex-col">
              {Object.entries(detailKeys).map(([key, value]) => (
                <div
                  dir="rtl"
                  className="flex flex-row text-gray-500 py-1 border-b-[1px] border-gray-300 justify-between w-full"
                  key={key}
                >
                  <span>{value}</span>
                  <span className="text-gray-900">{detail[key]}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col mt-[5rem] gap-4">
            <InfinitySlider
              images={[
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6tcD5h90YTk2sVcruvpVJ49YsR5H8o-Bl74I6VdrjIg&s",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4oiqvLyfyyU9UghkY6KiXstwQ0Uxhg4oPaU7kMtWilw&s",
              ]}
            />
            <div className="flex flex-col">
              <h3 className="font-bold border-b-[1px] border-gray-300 pb-3">
                امتیاز و دیدگاه کاربران
              </h3>
              <span className="flex flex-row pt-3 px-3">
                <span className="text-xl">{` ${detail["score"]} از `}</span>
                <span className="text-xl">
                  <b>5</b>
                </span>
              </span>
              <span className="px-2 text-gray-400">{renderText()}</span>
              <h3 className="font-bold border-b-[1px] border-gray-300 pt-5 pb-1">
                ثبت امتیاز
              </h3>
              <div className="flex flex-col justify-center w-full">
                <StarPicker />
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

Detail.propTypes = {
  isOpen: bool,
  handleClose: func,
  detail:object
};
