import React, { useRef, useState } from "react";
import Modal from "./Common/Modal";
import IconButton from "./Common/IconButton";
import { FcGoogle } from "react-icons/fc";
import { ImCancelCircle } from "react-icons/im";
import InputForm from "./Common/InputForm";
import { CiLogin } from "react-icons/ci";
import { AiOutlineUserAdd } from "react-icons/ai";

export default function Login() {
  const [isModalOpen, setisModalOpen] = useState(false);
  const formRef = useRef(null);
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
        <div className="login-container">
          <button
            className="login-container-cancel-button"
            onClick={handleClose}
          >
            <ImCancelCircle />
          </button>
          <h2 className="login-title">Sign in</h2>
          <div className="login-button-section">
            <IconButton
              title={"sign in with Google"}
              Icon={FcGoogle}
              clickHandler={null}
            />
          </div>
          <div className="login-divier-line">
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
