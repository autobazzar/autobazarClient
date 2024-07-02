import { bool, func, object, string } from "prop-types";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "./Common/Modal";
import { detailKeys } from "../utils/const";
import InfinitySlider from "./Common/InfinitySlider";
import StarPicker from "./Common/StarPicker";
import { CgClose } from "react-icons/cg";
import Button from "./Common/Button";
import { deleteAd, receiveAdScore, receiveNumberOfScores } from "../api/api";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { prettyString } from "../utils/prettyString";

export default function Detail({ id, isOpen, handleClose, detail, img, isMine, mobileNum }) {
  const profile = useSelector((state) => state.profile);
  console.log(detail)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [score, setScore] = useState("");
  const [scores, setScores] = useState("");
  const navigate = useNavigate();
  const handleDeleteClick = () => {

    setIsDeleteModalOpen(true);
  };

  useEffect(() => {
    const fetchScore = async () => {
      try {
        const response = await receiveAdScore(id);
        setScore(response.data);
      } catch (error) {
        console.error('Error fetching ads data:', error);
        setScore("هنوز هیچ کاربری به این آگهی امتیاز نداده است.");
      }
    };

    const getNumberOfScores = async () => {
      try {
        const response = await receiveNumberOfScores(id);
        setScores(response.data);
      } catch (error) {
        setScores("0");
      }
    };

    fetchScore();
    getNumberOfScores();
  }, [id]);

  const handleConfirmDelete = async () => {
    try {
      await deleteAd(id);
      console.log("Ad deleted");
      setIsDeleteModalOpen(false);
      window.location.reload();
    } catch (error) {
      console.error("Error deleting ad:", error);
    }
  };

  const handleEditClick =  () => {
    navigate(`/edit-ad/${id}`)
  };

  const handleCancelDelete = () => {
    setIsDeleteModalOpen(false);
  };

  const renderText = () => {
    return `از مجموع ${scores} امتیاز دهنده`;
  };

  const handleContactClick = () => {
    if("user_id" in profile)
      setIsContactModalOpen(true);
    else{
      toast.error(prettyString("لطفا ابتدا وارد شوید و یا ثبت نام کنید."));
    }
    
  };

  const handleCloseContactModal = () => {
    setIsContactModalOpen(false);
  };

  return (
    <>
      <Modal isOpen={isOpen} handleClose={handleClose}>
        <div className="flex flex-col gap-y-4 ">
          <button onClick={handleClose}>
            <CgClose />
          </button>
          <div className="border-b-2 mb-2"></div>
          {isMine && (
            <div className="flex flex-row gap-x-2 min-h-0 h-full ">
              <Button text="حذف آگهی" onClick={() => handleDeleteClick()} className='border-2 border-red-800 !text-xs !bg-red-800 !h-full' />
              <Button text="ویرایش آگهی" onClick={() => handleEditClick()} className='border-2 border-[#2b4e47] !text-xs ' />
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
                لحظاتی پیش در {detail.city}
              </h3>
              <div dir="rtl" className="flex pt-7 pb-5 flex-row justify-between gap-5">
                <button
                  className="p-2 w-[10rem] hover:bg-[#4C857A] text-nowrap rounded-xl bg-[var(--buttons-color)] text-white shadow-lg shadow-gray-200"
                  onClick={handleContactClick}
                >
                  اطلاعات تماس
                </button>
                <button className="p-2 w-[10rem] rounded-xl border-[1px] border-gray-700 shadow-md shadow-gray-400">
                  ایمیل
                </button>
              </div>
            </div>
            <div className="flex flex-col">
              {Object.entries(detailKeys).map(([key, value]) => (
                <div dir="rtl" className="flex flex-row text-gray-500 py-1 border-b-[1px] border-gray-300 justify-between w-full" key={key}>
                  <span>{value}</span>
                  <span className="text-gray-900">{detail[key]}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col mt-[5rem] gap-4">
            <InfinitySlider images={[img]} />
            <div className="flex flex-col">
              <h3 className="font-bold border-b-[1px] border-gray-300 pb-3">
                امتیاز و دیدگاه کاربران
              </h3>
              {score !== "هنوز هیچ کاربری به این آگهی امتیاز نداده است." && (
                <div>
                  <span className="flex flex-row pt-3 mr-2">
                    <span className="text-xl text-right pl-1 mr-0 font-bold">{`${score} از`}</span>
                    <span className="text-xl opacity-50">
                      <b>{" "}5</b>
                    </span>
                  </span>
                  <span className="px-2 text-gray-400">{renderText()}</span>
                </div>
              )}
              {score.length > 10 && (
                <h6 className="mr-1 mt-2 font-sm text-sm opacity-50">{score}</h6>
              )}
              <h3 className="font-bold border-b-[1px] border-gray-300 pt-5 pb-1">
                ثبت امتیاز
              </h3>
              <div className="flex flex-col justify-center w-full">
                <StarPicker user_id={profile.user_id} ad_id={id} />
              </div>
            </div>
          </div>
        </div>
      </Modal>

      {/* Delete Confirmation Modal */}
      {isDeleteModalOpen && (
        <Modal isOpen={isDeleteModalOpen} handleClose={handleCancelDelete}>
          <div className="p-5">
            <h2 className="text-xl font-bold mb-4">آیا مطمئن هستید که می‌خواهید این آگهی را حذف کنید؟</h2>
            <div className="flex justify-end gap-3">
              <button onClick={() => handleConfirmDelete()} className="p-2 rounded-xl bg-red-600 text-white">
                بله، حذف شود
              </button>
              <button onClick={() => handleCancelDelete()} className="p-2 rounded-xl bg-gray-300 text-black">
                لغو
              </button>
            </div>
          </div>
        </Modal>
      )}

      {/* Contact Info Modal */}
      {isContactModalOpen && (
        <Modal isOpen={isContactModalOpen} handleClose={handleCloseContactModal}>
          <div className="p-5">
            <h2 className="text-xl font-bold mb-4">اطلاعات تماس</h2>
            <div className="flex justify-center items-center">
              <span className="text-white p-2 rounded-lg bg-[#2b4e47]">{mobileNum}</span>
            </div>
            <div className="flex justify-end mt-4">
              <button onClick={handleCloseContactModal} className="p-2 rounded-xl bg-gray-300 text-black">
                بستن
              </button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}

Detail.propTypes = {
  id: string,
  isOpen: bool,
  handleClose: func,
  detail: object,
  img: string,
  isMine: bool,
  mobileNum: string,
};
