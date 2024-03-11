import React, { useRef, useState } from "react";
import Modal from "./Common/Modal";
import IconButton from "./Common/IconButton";
import { FcGoogle } from "react-icons/fc";
import { ImCancelCircle } from "react-icons/im";
import InputForm from "./Common/InputForm";
import { CiLogin } from "react-icons/ci";
import "./sections.css";

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
        <div className="container">
          <button className="container-cancel-button" onClick={handleClose}>
            <ImCancelCircle />
          </button>
          <h2 className="title-section">Sign in</h2>
          <div className="button-section">
            <IconButton
              title={"sign in with Google"}
              Icon={FcGoogle}
              clickHandler={null}
            />
          </div>
          <div className="divier-line">
            <hr />
          </div>
          <form ref={formRef} className="form" onSubmit={handleFormSubmit}>
            <InputForm placeHolder={"Email"} />
            <InputForm placeHolder={"password"} />
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
