import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { editUser } from '../api/api'; // Assuming the path to your api file

function EditProfile() {
  const profile = useSelector((state) => state.profile);
  const id = profile.user_id;

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    oldPassword: '',
    newPassword: '',
    passwordConfirmation: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      name: formData.name,
      phone: formData.phone,
      address: formData.address,
      oldPassword: formData.oldPassword,
      password: formData.newPassword,
    };
    try {
      await editUser(payload, id); // Pass payload and id separately
      // Handle success (e.g., show a success message or redirect)
    } catch (error) {
      console.log(error)
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
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="text-gray-700" htmlFor="phone">شماره تلفن</label>
            <input
              id="phone"
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="text-gray-700" htmlFor="address">آدرس</label>
            <input
              id="address"
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
              value={formData.address}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="text-gray-700" htmlFor="oldPassword">گذرواژه قدیمی</label>
            <input
              id="oldPassword"
              type="password"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
              value={formData.oldPassword}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="text-gray-700" htmlFor="newPassword">گذرواژه جدید</label>
            <input
              id="newPassword"
              type="password"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
              value={formData.newPassword}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="text-gray-700" htmlFor="passwordConfirmation">تکرار گذرواژه</label>
            <input
              id="passwordConfirmation"
              type="password"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
              value={formData.passwordConfirmation}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-[#2b4e47] rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
            اعمال تغییرات
          </button>
        </div>
      </form>
    </section>
  );
}

export default EditProfile;
