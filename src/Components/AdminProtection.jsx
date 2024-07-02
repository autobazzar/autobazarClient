import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { toast } from 'react-toastify';
import { prettyString } from '../utils/prettyString';


const AdminProtection = () => {
  const profile = useSelector((state) => state.profile);
  if (!("user_id" in profile) || profile.role != "admin") {
    const message = "ابتدا ثبت نام کنید یا وارد سایت شوید.";
    toast.error(prettyString(message));
    console.log(message);
    return <Navigate to="/" />;
  }

  return <Outlet/>;
};

export default AdminProtection;
