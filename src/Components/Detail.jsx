import { bool, func, object, string } from "prop-types";
import { useState } from "react";
import Modal from "./Common/Modal";
import { detailKeys } from "../utils/const";
import InfinitySlider from "./Common/InfinitySlider";
import StarPicker from "./Common/StarPicker";
import { CgClose } from "react-icons/cg";
import { MdDeleteForever } from "react-icons/md";
import Button from "./Common/Button";
import { PiWarningCircleBold } from "react-icons/pi";
import { deleteAd } from "../api/api";

export default function Detail({ id, isOpen, handleClose, detail, img, isMine }) {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  
  const handleDeleteClick = () => {
    setIsDeleteModalOpen(true);
  };

  const handleConfirmDelete = async () => {
    try {
      await deleteAd(id);
      console.log("Ad deleted");
      setIsDeleteModalOpen(false);
      // Reload the page
      window.location.reload();
    } catch (error) {
      console.error("Error deleting ad:", error);
    }
  };

  const handleCancelDelete = () => {
    setIsDeleteModalOpen(false);
  };

  const renderText = () => {
    return `امتیاز ${detail.numberOfScores} از مجموع`;
  };

  return (
    <>
      <Modal isOpen={isOpen} handleClose={handleClose}>
        <div className="flex flex-col gap-y-4 ">
          <button onClick={handleClose}>
            <CgClose />
          </button>
          <div className="border-b-2"></div>
          {isMine && (
              <div className="flex flex-row gap-x-2 min-h-0 h-full ">
                <Button text="حذف آگهی" onClick={() => handleDeleteClick()} className='border-2 border-red-800 !text-xs !bg-red-800 !h-full' />
                <Button text="ویرایش آگهی" onClick={() => handleDeleteClick()} className='border-2 border-[#2b4e47] !text-xs ' />
              </div>
          )}
        </div>
        <div dir="rtl" className="flex flex-row gap-5">
          <div className="detail">
            <div className="flex flex-col items-end">
              <h1 className="w-full text-start text-3xl font-bold detail-border pb-5 mb-5">
                {detail.brand}
              </h1>
              <h3 className="w-full text-start detail-border pb-3 text-gray-600">
                لحظاتی پیش در {detail.address}
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
                img
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
      {isDeleteModalOpen && (
        <Modal isOpen={isDeleteModalOpen} handleClose={handleCancelDelete}>
          <div className="p-5">
            
            <h2 className="text-xl font-bold mb-4">آیا مطمئن هستید که می‌خواهید این آگهی را حذف کنید؟</h2>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => handleConfirmDelete()}
                className="p-2 rounded-xl bg-red-600 text-white"
              >
                بله، حذف شود
              </button>
              <button
                onClick={() => handleCancelDelete()}
                className="p-2 rounded-xl bg-gray-300 text-black"
              >
                لغو
              </button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}

Detail.propTypes = {
  id:string,
  isOpen: bool,
  handleClose: func,
  detail: object,
  img: string,
  isMine: bool,
};
