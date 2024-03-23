import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import React from "react";
import Profile from "../Components/Profile";
export const router = createBrowserRouter([
  {
    path: "/",
    
    element: React.createElement(App),
  },
  {
    path: "/profile", 
    element: React.createElement(Profile)
  }
 
]);



