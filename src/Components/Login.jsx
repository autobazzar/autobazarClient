import { useRef, useState } from "react";
import Modal from "./Common/Modal";
import { ImCancelCircle } from "react-icons/im";
import InputForm from "./Common/InputForm";
import { GoogleLogin } from "@react-oauth/google";
import { getUserGoogle } from "../utils/decoder";
import "./sections.css";
import { useDispatch } from "react-redux";
import { logginUser } from "../store/profileSlice";
import { bool } from "prop-types";
import { useNavigate } from "react-router-dom";

export default function Login({ openInitial }) {
  const [isModalOpen, setisModalOpen] = useState(openInitial || false);
  const formRef = useRef(null);
  const dispatch = useDispatch();
  const navigate=useNavigate();
  async function responseMessage(credintalResponse) {
    const user = getUserGoogle(credintalResponse.credential);
    dispatch(logginUser({ email: user.email, flag: true ,navigate}));
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
    dispatch(logginUser({ ...formRef.current, flag: false }));
    handleClose();
  }

  function handleChange(e, key) {
    formRef.current = {
      ...formRef.current,
      [key]: e.target.value,
    };
  }

  return (
    <div className="flex flex-row items-center font-dast">
      <Modal isOpen={isModalOpen} handleClose={handleClose}>
        <div className="container">
          <div className="flex flex-row items-center justify-between mb-8">
            <button
              className="container-cancel-button justify-normal"
              onClick={handleClose}
            >
              <ImCancelCircle />
            </button>
            <p className="title-section">ورود به حساب کاربری</p>
          </div>
          <div className="button-section">
            <GoogleLogin
              onSuccess={responseMessage}
              onError={onError}
              useOneTap
            />
          </div>
          <div className="divier-line">
            <p >یا</p>
            <hr />
          </div>
          <form className="form" onSubmit={handleFormSubmit}>
            <InputForm
              placeHolder={"ایمیل"}
              type={"email"}
              handleChange={handleChange}
              fieldkey={"email"}
            />
            <InputForm
              placeHolder={"رمز عبور"}
              type={"password"}
              handleChange={handleChange}
              fieldkey={"password"}
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
      <button onClick={handleOpen}>
        ورود
      </button>
    </div>
  );
}

Login.propTypes={
  openInitial:bool
}