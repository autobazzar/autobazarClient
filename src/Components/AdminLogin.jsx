import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logginUser } from "../store/profileSlice";

export default function AdminLogin() {
  const fieldRefs = useRef({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const hanldeChange = (key, value) => {
    fieldRefs.current = { ...fieldRefs.current, [key]: value };
  };
  
  const submit = () => {
    dispatch(logginUser({...fieldRefs.current,navigate}))
  };
  return (
    <div
      dir="rtl"
      className="flex items-center justify-center h-screen w-full px-5 sm:px-0"
    >
      <div className="flex bg-white rounded-lg shadow-lg border overflow-hidden max-w-sm lg:max-w-4xl w-full">
        <div
          className="hidden md:block lg:w-1/2 bg-cover bg-blue-700"
          style={{
            backgroundImage: `url(https://www.tailwindtap.com//assets/components/form/userlogin/login_tailwindtap.jpg)`,
          }}
        ></div>
        <div className="w-full p-8 lg:w-1/2">
          <p className="text-xl text-gray-600 text-center">
            به پنل ادمین خوش آمدین
          </p>
          <div className="mt-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              نام کاربری
            </label>
            <input
              onChange={(e) => hanldeChange("email", e.target.value)}
              className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
              type="email"
              required
            />
          </div>
          <div className="mt-4 flex flex-col justify-between">
            <div className="flex justify-between">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                رمز عبور
              </label>
            </div>
            <input
              onChange={(e) => hanldeChange("password", e.target.value)}
              className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
              type="password"
            />
          </div>
          <div className="mt-8">
            <button
              onClick={submit}
              className="bg-[var(--buttons-color)] text-white font-bold py-2 px-4 w-full rounded hover:opacity-80"
            >
              ورود
            </button>
          </div>
        </div>
        <div className="h-full">
          <img
            src="https://www.tailwindtap.com/assets/common/marketing.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
