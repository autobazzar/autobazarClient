import React from 'react'
import { useSelector } from 'react-redux';
export default function Profile() {

  const profile = useSelector((state) => state.profile);
  console.log(profile);
  return (
    <div>Profile</div>
  )
}
