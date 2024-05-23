import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { prettyString } from './prettyString';
const ProtectedRoute = ({ element }) => {
  const profile = useSelector((state) => state.profile );
  if (!('user_id' in profile)) {
    const message  = 'ابتدا ثبت نام کنید یا وارد سایت شوید.';
    toast.error(prettyString(message));
    console.log(message)
    return (<Navigate to="/" />);
  }

  return element;
};

export default ProtectedRoute;
