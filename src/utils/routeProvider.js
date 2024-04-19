import { createBrowserRouter } from "react-router-dom";
import React from "react";
import Home from "../Home";
import Profile from "../Components/Profile";
import ShowAds from "../Components/ShowAds";
export const router = createBrowserRouter([
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

  }
]);





