import { createBrowserRouter } from "react-router-dom";
import React from "react";
import Home from "../Home";
import Profile from "../Components/Profile";
import ShowAds from "../Components/ShowAds";
import CallUs from "../Components/CallUs";
import Admin from "../Components/Admin";
import Layout from "../Components/Layout";
import SubmitAds from "../Components/SubmitAds";
import ProtectedRoute from "./protectedRoute";
import { ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
export const router = createBrowserRouter([
  {
    element: React.createElement(Layout),
    children:[
      {
        path: "/",
        element: React.createElement(Home),
          },
      {
        path: "/profile", 
        element: React.createElement(ProtectedRoute, { element: React.createElement(Profile) })
      },
      {
        path: "/show-ads",
        element: React.createElement(ShowAds)
      },
      {
        path: "/submit-ads",
        element: React.createElement(SubmitAds)
      },
      {
        path: "/contact-us",
      element:React.createElement(CallUs),
      }
    ],
  },
  {
    path: "/admin",
    element: React.createElement(Admin)
  },
]);





