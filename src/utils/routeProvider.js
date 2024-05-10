import { createBrowserRouter } from "react-router-dom";
import React from "react";
import Home from "../Home";
import Profile from "../Components/Profile";
import ShowAds from "../Components/ShowAds";
import Admin from "../Components/Admin";
import Layout from "../Components/Layout";
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
        element: React.createElement(Profile)
      },
      {
        path: "/show-ads",
        element: React.createElement(ShowAds)
      },
      {
        path: "/SubmitAdvertisment",
        element: React.createElement(ShowAds)
      }
    ],
  },
  {
    path: "/admin",
    element: React.createElement(Admin)
  },
]);





