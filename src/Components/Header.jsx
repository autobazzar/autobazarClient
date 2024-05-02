import { MdOutlineDarkMode } from "react-icons/md";
import "./sections.css";
import Login from "./Login";
import Signup from "./Signup";
import { changeTheme } from "../utils/themeProvider";
import { useSelector } from "react-redux";
import { VscAccount } from "react-icons/vsc";
import { isEmpty } from "../utils/validators";
import { IoIosLogOut } from "react-icons/io";
import { persistor } from "../store/store";
export default function Header() {
  const profile = useSelector((state) => state.profile);
  async function handleLogOout() {
    // dispatch(logOut());
    persistor.purge();
  }
  return (
    <div className="header-section shadow-sm p-3 ">
      <div className="row-container">
        <div className="row-container links font-dast">
          <a className="font-dast text-lg" href="contact-us">
            تماس با ما
          </a>
          <a className="font-dast text-lg" href="about-us">
            درباره ما
          </a>
        </div>
      </div>
      <div className="row-container">
        <button onClick={changeTheme}>
          <MdOutlineDarkMode size={20} />
        </button>
        {isEmpty(profile) ? (
          <div className="flex flex-row gap-2">
            <Signup />
            <div className="text-[22px] pointer-events-none" >/</div>
            <Login />
            {/* <div className="h-auto flex justify-center items-center">
            <RiAccountCircleLine className="h-full" width={200} />
            </div> */}
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
