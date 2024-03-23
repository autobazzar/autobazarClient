import React, { useRef, useState } from "react";
import Modal from "./Common/Modal";
import { ImCancelCircle } from "react-icons/im";
import InputForm from "./Common/InputForm";
import { GoogleLogin } from "@react-oauth/google";
import { getUserGoogle } from "../utils/decoder";
import { AiOutlineUserAdd } from "react-icons/ai";
import { useDispatch } from "react-redux";
import "./sections.css";
import { SignUpUser } from "../store/profileSlice";
export default function Signup() {
  const [isModalOpen, setisModalOpen] = useState(false);
  const formRef = useRef(null);
  const dispatch = useDispatch();

  async function responseMessage(credintalResponse) {
    const user = getUserGoogle(credintalResponse.credential);
    handleClose();
    dispatch(SignUpUser({ ...user, flag: true }));
  }

  function handleChange(e, key) {
    formRef.current = {
      ...formRef.current,
      [key]: e.target.value,
    };
  }

  function onError(error) {
    console.error(error);
  }

  function handleOpen() {
    setisModalOpen(true);
  }

  function handleClose() {
    setisModalOpen(false);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    dispatch(SignUpUser({ ...formRef.current, flag: false }));
    handleClose();
  }

  return (
    <div className="flex flex-row items-center">
      <Modal isOpen={isModalOpen} handleClose={handleClose}>
        <div className="container">
          <div className="flex flex-row items-center justify-between mb-8">
            <button
              className="container-cancel-button justify-normal"
              onClick={handleClose}
            >
              <ImCancelCircle />
            </button>
            <h2 className="title-section">ساخت حساب کاربری</h2>
          </div>
          <div className="button-section">
            <GoogleLogin
              onSuccess={responseMessage}
              onError={onError}
              useOneTap
            />
          </div>
          <div className="divier-line">
            <p>یا</p>
            <hr />
          </div>
          <form className="form" onSubmit={handleFormSubmit}>
            <InputForm
              placeHolder={"نام کاربری"}
              type={"text"}
              fieldkey={"userName"}
              handleChange={handleChange}
            />
            <InputForm
              placeHolder={"رمز عبور"}
              type={"password"}
              fieldkey={"password"}
              handleChange={handleChange}
            />
            <InputForm
              placeHolder={"ایمیل"}
              type={"email"}
              fieldkey={"email"}
              handleChange={handleChange}
            />
            <button
              className="h-[44px] text-center bg-[var(--buttons-color)] text-white rounded-lg"
              type="sumbit"
            >
              تایید
            </button>
          </form>
        </div>
      </Modal>
      <button onClick={handleOpen} aria-label="signup">
        <AiOutlineUserAdd size={20} />
      </button>
    </div>
  );
}
