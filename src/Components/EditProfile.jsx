import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { editUser, isGoogle } from '../api/api';

function EditProfile() {
  const profile = useSelector((state) => state.profile);
  const id = profile.user_id;

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    oldPassword: '',
    newPassword: '',
    passwordConfirmation: '',
  });

  const [isGoogleUser, setIsGoogleUser] = useState(false);

  useEffect(() => {
    const checkIfGoogleUser = async () => {
      try {
        const response = await isGoogle(id);
        if(response.data.google == "No")
            setIsGoogleUser(false);
        else
            setIsGoogleUser(true)
        console.log('isGoogleUser state:', response.data); // Modify this line
      } catch (error) {
        console.error('Error checking if user is a Google user:', error);
      }
    };

    checkIfGoogleUser();
  }, [id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = isGoogleUser
      ? { name: formData.name, phone: formData.phone, address: formData.address }
      : { ...formData };

    try {
      await editUser(payload, id);
      // Handle success, show a success message or redirect
    } catch (error) {
      console.error('Error updating user profile:', error);
      // Handle error, show an error message
    }
  };

  return (
    <section className="max-w-4xl w-2/3 p-6 mx-auto bg-white text-black rounded-md shadow-md">
      <h2 className="text-lg font-semibold text-gray-700 capitalize">ویرایش پروفایل</h2>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          <div>
            <label className="text-gray-700" htmlFor="name">نام و نام خانوادگی</label>
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label className="text-gray-700" htmlFor="phone">شماره تلفن</label>
            <input
              id="phone"
              type="text"
              value={formData.phone}
              onChange={handleChange}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label className="text-gray-700" htmlFor="address">آدرس</label>
            <input
              id="address"
              type="text"
              value={formData.address}
              onChange={handleChange}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
            />
          </div>

          {!isGoogleUser && (
            <>
              <div>
                <label className="text-gray-700" htmlFor="oldPassword">گذرواژه قدیمی</label>
                <input
                  id="oldPassword"
                  type="password"
                  value={formData.oldPassword}
                  onChange={handleChange}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label className="text-gray-700" htmlFor="newPassword">گذرواژه جدید</label>
                <input
                  id="newPassword"
                  type="password"
                  value={formData.newPassword}
                  onChange={handleChange}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label className="text-gray-700" htmlFor="passwordConfirmation">تکرار گذرواژه</label>
                <input
                  id="passwordConfirmation"
                  type="password"
                  value={formData.passwordConfirmation}
                  onChange={handleChange}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                />
              </div>
            </>
          )}
        </div>

        <div className="flex justify-end mt-6">
          <button type="submit" className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 bg-[#2b4e47] rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">اعمال تغییرات</button>
        </div>
      </form>
    </section>
  );
}

export default EditProfile;
