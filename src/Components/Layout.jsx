import Header from "./Header";
import Footer from "./Footer";
import { ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Outlet } from "react-router-dom";
export default function Layout() {
  return (
    <>
    <ToastContainer />
      <Header />
      <Outlet/>
      <Footer />
    </>
  );
}
