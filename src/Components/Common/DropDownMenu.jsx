import React, { useState, useEffect, useRef } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowUp } from 'react-icons/io';

const DropDownMenu = ({ title, items, showInput, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleInputSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted value:', inputValue);
    setInputValue('');
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
    <div ref={dropdownRef} className="relative hover:bg-[#F1F5F6]">
      <button
        className="w-3/4 text-lg py-4 px-4 border-b border-gray-300 text-gray-700 text-right"
        onClick={toggleDropdown}
      >
        <div className="flex flex-row items-center">
          {isOpen ? (
            <IoIosArrowUp className="mt-2 ml-2" />
          ) : (
            <IoIosArrowDown className="mt-2 ml-2" />
          )}
          {title}
        </div>
      </button>
      {isOpen && (
        <div className="w-full bg-white  p-4">
          {showInput ? (
            <form onSubmit={handleInputSubmit}>
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder={placeholder}
                className="w-full px-2 py-1 border border-gray-300 rounded"
              />
              <button
                type="submit"
                className="mt-2 py-1 px-4 bg-gray-200 hover:bg-gray-300 rounded"
              >
                Submit
              </button>
            </form>
          ) : (
            <ul>
              {items.map((item) => (
                <li key={item} className="py-2 px-4 hover:bg-gray-200 cursor-pointer w-full">
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};
export default DropDownMenu;