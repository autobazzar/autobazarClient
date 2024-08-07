import { bool, func, object, string } from "prop-types";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "./Common/Modal";
import { detailKeys } from "../utils/const";
import InfinitySlider from "./Common/InfinitySlider";
import StarPicker from "./Common/StarPicker";
import { CgClose } from "react-icons/cg";
import Button from "./Common/Button";
import { deleteAd, getComments, receiveAdScore } from "../api/api";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { prettyString } from "../utils/prettyString";
import Comment from "./Comment";

export default function Detail({ id, isOpen, handleClose, detail, img, isMine, mobileNum }) {
  const profile = useSelector((state) => state.profile);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [score, setScore] = useState(-1);

  const [comments,setComments]=useState([]);
  const navigate = useNavigate();
  const handleDeleteClick = () => {

    setIsDeleteModalOpen(true);
  };
  useEffect(() => {
    const fetchComments = async () => {
      const comments = await getComments(id);
      setComments(comments.data);
      const response = await receiveAdScore(id);
      setScore(response.data);
    };
    if (isOpen) fetchComments();
  }, [isOpen]);
  // useEffect(() => {
  //   const fetchScore = async () => {
  //     try {
  //       const response = await receiveAdScore(id);
  //       // setScore(response.data);
  //     } catch (error) {
  //       console.error('Error fetching ads data:', error);
  //       // setScore("هنوز هیچ کاربری به این آگهی امتیاز نداده است.");
  //     }
  //   };

  //   const getNumberOfScores = async () => {
  //     try {
  //       const response = await receiveNumberOfScores(id);
  //       setScores(response.data);
  //     } catch (error) {
  //       setScores("0");
  //     }
  //   };

  //   fetchScore();
  //   getNumberOfScores();
  // }, [id]);

  const handleConfirmDelete = async () => {
    try {
      await deleteAd(id);
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
    return [1, 2, 3, 4, 5].map((value) => (
      <span
        key={value}
        className={`pointer-events-none ${
          value > score ? "text-gray-400" : "text-yellow-400"
        }`}
      >
        &#9733;
      </span>
    ));
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
  const renderNoComment=()=>{
    return <p className="w-full text-center mt-5 font-bold">بدون دیدگاه</p>
  }

  return (
    <>
      <Modal isOpen={isOpen} handleClose={handleClose}>
        <div className="flex flex-col gap-y-4 ">
          <button onClick={handleClose}>
            <CgClose />
          </button>
          <div className="border-b-2 mb-2"></div>
          <InfinitySlider className="lg:hidden" images={[img]} />

          {isMine && (
            <div className="flex flex-row gap-x-2 min-h-0 h-full ">
              <Button
                text="حذف آگهی"
                onClick={() => handleDeleteClick()}
                className="border-2 border-red-800 !text-xs !bg-red-800 !h-full"
              />
              <Button
                text="ویرایش آگهی"
                onClick={() => handleEditClick()}
                className="border-2 border-[#2b4e47] !text-xs "
              />
            </div>
          )}
        </div>
        <div dir="rtl" className="flex flex-col lg:flex-row gap-5">
          <div className="detail">
            <div className="flex flex-col items-end">
              <h1 className="w-full text-start text-3xl font-bold detail-border pb-5 mb-5">
                {detail.brand}
              </h1>
              <h3 className="w-full text-start detail-border pb-3 text-gray-600">
                لحظاتی پیش در {detail.city}
              </h3>
              <div
                dir="rtl"
                className="flex pt-7 pb-5 flex-row justify-between gap-5"
              >
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

          <div className="flex flex-col gap-1">
            <InfinitySlider className="hidden lg:block" images={[img]} />
            <div className="flex flex-col">
              <h3 className="flex flex-row font-bold border-b-[1px] border-gray-300 pb-3 justify-between">
                امتیاز و دیدگاه کاربران
                <p dir="rtl">{renderText()}</p>
              </h3>
              <div className="flex flex-col overflow-y-auto overflow-x-hidden pt-2 gap-4 h-[8rem]">
                {comments.length
                  ? comments.map((item, index) => (
                      <Comment key={index} {...item} />
                    ))
                  : renderNoComment()}
              </div>
              <h3 className="font-bold border-b-[1px] border-gray-300 pt-1 pb-1">
                ثبت نظر
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
            <h2 className="text-xl font-bold mb-4">
              آیا مطمئن هستید که می‌خواهید این آگهی را حذف کنید؟
            </h2>
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

      {/* Contact Info Modal */}
      {isContactModalOpen && (
        <Modal
          isOpen={isContactModalOpen}
          handleClose={handleCloseContactModal}
        >
          <div className="p-5">
            <h2 className="text-xl font-bold mb-4">اطلاعات تماس</h2>
            <div className="flex justify-center items-center">
              <span className="text-white p-2 rounded-lg bg-[#2b4e47]">
                {mobileNum}
              </span>
            </div>
            <div className="flex justify-end mt-4">
              <button
                onClick={handleCloseContactModal}
                className="p-2 rounded-xl bg-gray-300 text-black"
              >
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
