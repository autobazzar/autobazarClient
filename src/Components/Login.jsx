import React, { useRef, useState } from "react";
import Modal from "./Common/Modal";
import IconButton from "./Common/IconButton";
import { FcGoogle } from "react-icons/fc";
import { ImCancelCircle } from "react-icons/im";
import InputForm from "./Common/InputForm";
import { CiLogin } from "react-icons/ci";
import { AiOutlineUserAdd } from "react-icons/ai";
import { GoogleLogin } from "@react-oauth/google";
import { getUserGoogle } from "../utils/decoder";
import "./sections.css";
import { loginUser, registerUser } from "../api/api";
export default function Login({ openInitial }) {
  const [isModalOpen, setisModalOpen] = useState(openInitial || false);
  const formRef = useRef(null);

  async function responseMessage(credintalResponse) {
    const user = getUserGoogle(credintalResponse.credential);
    loginUser(
      {
        // headers: { "Content-Type": "application/json" },
        // body: { 
          email: user.email 
        // },
      },
      true
    );
  }
  function onError(error) {
    console.error(error);
  }

  function handleOpen() {
    console.error("hello");
    setisModalOpen(true);
  }
  function handleClose() {
    setisModalOpen(false);
  }
  function handleFormSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    console.error(formRef.current);
  }
  return (
    <div className="flex flex-row items-center">
      <Modal isOpen={isModalOpen} handleClose={handleClose}>
        <div className="container">
          <button className="container-cancel-button" onClick={handleClose}>
            <ImCancelCircle />
          </button>
          <h2 className="title-section">Sign in</h2>
          <div className="button-section">
            <GoogleLogin
              onSuccess={responseMessage}
              onError={onError}
              useOneTap
            />
          </div>
          <div className="divier-line">
            {/* <p>or</p> */}
            <hr />
          </div>
          <form ref={formRef} className="form" onSubmit={handleFormSubmit}>
            <InputForm placeHolder={"Email"} />
            <button
              className="h-[44px] text-center bg-purple-700 text-white rounded-lg"
              type="sumbit"
            >
              Continue
            </button>
          </form>
        </div>
      </Modal>
      <button onClick={handleOpen}>
        <CiLogin />
      </button>
    </div>
  );
}
