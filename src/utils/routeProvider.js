import { createBrowserRouter } from "react-router-dom";
import React from "react";
import Home from "../Home";
import Profile from "../Components/Profile";
import ShowAds from "../Components/ShowAds";
import Admin from "../Components/Admin";
import Layout from "../Components/Layout";
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
    ],
  },
  {
    path: "/admin",
    element: React.createElement(Admin)
  },
]);





