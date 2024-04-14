import React, { useState, useEffect, useRef } from 'react';

const DropDownMenu = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative">
      <button
        className="w-full py-2 px-4 bg-gray-300 text-gray-700 rounded-md"
        onClick={toggleDropdown}
      >
        {title}
      </button>
      {isOpen && (
        <ul className="w-full bg-white border border-gray-300 rounded-md shadow">
          {items.map((item) => (
            <li
              key={item}
              className="py-2 px-4 hover:bg-gray-200 cursor-pointer w-full"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropDownMenu;