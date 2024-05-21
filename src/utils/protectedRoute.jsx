import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const ProtectedRoute = ({ element }) => {
  const profile = useSelector((state) => state.profile );
  if (!('user_id' in profile)) {
    toast.error('ابتدا ثبت نام کنید یا وارد سایت شوید.');
    return (<Navigate to="/" />);
  }

  return element;
};

export default ProtectedRoute;
