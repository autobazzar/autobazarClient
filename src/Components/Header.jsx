import React from "react";
import { MdOutlineDarkMode } from "react-icons/md";
import logo from "../assets/image/logo.png";
import "./sections.css";
import Login from "./Login";
import Signup from "./Signup";
import { changeTheme } from "../utils/themeProvider";
import { useSelector } from "react-redux";
import { VscAccount } from "react-icons/vsc";
import { isEmpty } from "../utils/validators";
import { IoIosLogOut } from "react-icons/io";
import { persistor } from "../store/store";
// import { logOut } from "../store/profileSlice";
export default function Header() {
  const profile = useSelector((state) => state.profile);
  async function handleLogOout() {
    // dispatch(logOut());
    persistor.purge();
  }
  return (
    <div className="header-section">
      <div className="row-container">
        <a href="#">
          <img className="logo" src={logo} alt="" />
        </a>
        <div className="row-container links">
          <a href=""> تماس با ما</a>
          <a href=""> درباره ما</a>
        </div>
      </div>
      <div className="row-container">
        <button onClick={changeTheme}>
          <MdOutlineDarkMode size={20} />
        </button>
        {isEmpty(profile) ? (
          <div className="flex flex-row gap-2">
            <Signup />
            <div className="vertical-line"></div>
            <Login />
          </div>
        ) : (
          <div className="flex flex-row gap-5">
            <a className="flex flex-row gap-1 items-center" href="/profile">
              <h3>{profile.userName}</h3>
              <VscAccount />
            </a>
            <button onClick={handleLogOout} aria-label="log out">
              <IoIosLogOut size={20} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
