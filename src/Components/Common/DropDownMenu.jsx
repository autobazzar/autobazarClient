import React, { useState, useEffect, useRef } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowUp } from 'react-icons/io';

const DropDownMenu = ({ title, items, showInput, placeholder, type, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [startYear, setStartYear] = useState('');
  const [endYear, setEndYear] = useState('');
  const [startPrice, setStartPrice] = useState('');
  const [endPrice, setEndPrice] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [isAccidental, setIsAccidental] = useState(false);

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

  const handleStartYearChange = (event) => {
    setStartYear(event.target.value);
    onChange(event.target.value, endYear);
  };

  const handleEndYearChange = (event) => {
    setEndYear(event.target.value);
    onChange(startYear, event.target.value);
  };

  const handleStartPriceChange = (event) => {
    setStartPrice(event.target.value);
    onChange(event.target.value, endPrice);
  };

  const handleEndPriceChange = (event) => {
    setEndPrice(event.target.value);
    onChange(startPrice, event.target.value);
  };

  const handleColorSelection = (color) => {
    if (selectedColor === color || color === 'None') {
      setSelectedColor('');
      onChange('');
    } else {
      setSelectedColor(color);
      onChange(color);
    }
  };

  const handleAccidentalChange = (event) => {
    setIsAccidental(event.target.checked);
    onChange(event.target.checked);
    
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
        className="w-[84%] text-sm py-4 px-4 border-b border-gray-300 text-gray-700 text-right"
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
        <div className="w-full bg-white text-sm p-4">
          {type === 'year' ? (
            <div>
              <input
                type="number"
                value={startYear}
                onChange={handleStartYearChange}
                placeholder="Start Year"
                className="w-full px-2 py-1 mb-2 border border-gray-300 rounded"
              />
              <input
                type="number"
                value={endYear}
                onChange={handleEndYearChange}
                placeholder="End Year"
                className="w-full px-2 py-1 mb-2 border border-gray-300 rounded"
              />
            </div>
          ) : type === 'color' ? (
            <ul>
              {items.map((color) => (
                <li
                  key={color}
                  className={`rounded-md py-2 px-4 hover:bg-gray-200 cursor-pointer w-full ${
                    selectedColor === color ? 'bg-gray-200' : ''
                  }`}
                  onClick={() => handleColorSelection(color)}
                >
                  {color}
                
                </li>
              ))}
            </ul>
          ) :type === 'price' ? (
            <div>
              <input
                type="number"
                value={startPrice}
                onChange={handleStartPriceChange}
                placeholder="از قیمت ... تومان"
                className="w-full px-2 py-1 mb-2 border border-gray-300 rounded"
              />
              <input
                type="number"
                value={endPrice}
                onChange={handleEndPriceChange}
                placeholder="تا قیمت ... تومان"
                className="w-full px-2 py-1 mb-2 border border-gray-300 rounded"
              />
            </div>
          ) : type === 'accidental' ? (
            <div>
              <input
                type="checkbox"
                checked={isAccidental}
                onClick={handleAccidentalChange}
                className="mr-2"
              />
              <label>Accidental</label>
            </div>
          ) : showInput ? (
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
                className="mt-2 text-sm py-1 px-4 bg-gray-200 hover:bg-gray-300 rounded"
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
