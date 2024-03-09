import React from "react";
import { MdOutlineDarkMode } from "react-icons/md";
import logo from "../assets/image/logo.png";
import "./sections.css";
import Login from "./Login";
import Signup from "./Signup";
import { changeTheme } from "../utils/themeProvider";
export default function Header() {
  return (
    <div className="header-section">
      <div className="row-container">
        <a href="#">
          <img className="logo" src={logo} alt="" />
        </a>
        <div className="row-container links">
          <a href=""> Car for sales</a>
          <a href=""> New Cars</a>
          <a href=""> Sell Your Car</a>
        </div>
      </div>
      <div className="row-container">
        <button onClick={changeTheme}>
          <MdOutlineDarkMode />
        </button>
        <div className="flex flex-row gap-2">
          <Signup />
          <div className="vertical-line"></div>
          <Login />
        </div>
      </div>
    </div>
  );
}
