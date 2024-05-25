import { useState, useEffect, useRef } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const DropDownMenu = ({ title, items, showInput, placeholder, type, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [startYear, setStartYear] = useState('');
  const [endYear, setEndYear] = useState('');
  const [startPrice, setStartPrice] = useState('');
  const [endPrice, setEndPrice] = useState('');
  const [startDis, setStartDis] = useState('');
  const [endDis, setEndDis] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedFuelType, setSelectedFuelType] = useState('');
  const [selectedEngineState, setSelectedEngineState] = useState('');
  

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

  const handleRangeChange = (startValue, endValue, startStateSetter, endStateSetter) => {
    startStateSetter(startValue);
    endStateSetter(endValue);
    onChange(startValue, endValue);
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

  const handleFuelSelection = (FuelType) => {
    if (selectedFuelType === FuelType || FuelType === 'None') {
      setSelectedFuelType('');
      onChange('');
    } else {
      setSelectedFuelType(FuelType);
      onChange(FuelType);
    }
  };

  const handleEngineSelection = (engineState) => {
    if (selectedEngineState === engineState || engineState === 'None') {
      setSelectedEngineState('');
      onChange('');
    } else {
      setSelectedEngineState(engineState);
      onChange(engineState);
    }
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

  const renderInputFields = () => {
    if (type === 'year') {
      return (
        <div>
          <input
            type="number"
            value={startYear}
            onChange={(event) => handleRangeChange(event.target.value, endYear, setStartYear, setEndYear)}
            placeholder="Start Year"
            className="w-full px-2 py-1 mb-2 border border-gray-300 rounded"
          />
          <input
            type="number"
            value={endYear}
            onChange={(event) => handleRangeChange(startYear, event.target.value, setStartYear, setEndYear)}
            placeholder="End Year"
            className="w-full px-2 py-1 mb-2 border border-gray-300 rounded"
          />
        </div>
      );
    }

    if (type === 'distance') {
      return (
        <div>
          <input
            type="number"
            value={startDis}
            onChange={(event) => handleRangeChange(event.target.value, endDis, setStartDis, setEndDis)}
            placeholder="از ... کیلومتر"
            className="w-full px-2 py-1 mb-2 border border-gray-300 rounded"
          />
          <input
            type="number"
            value={endDis}
            onChange={(event) => handleRangeChange(startDis, event.target.value, setStartDis, setEndDis)}
            placeholder="تا ... کیلومتر"
            className="w-full px-2 py-1 mb-2 border border-gray-300 rounded"
          />
        </div>
      );
    }

    if (type === 'color') {
      return (
        <ul>
          {items.map((color) => (
            <li
              key={color}
              className={`rounded-md text-gray-700 py-2 px-4 hover:bg-gray-200 hover:text-gray-700 cursor-pointer w-full ${
                selectedColor === color ? 'bg-[#2b4e47] text-white' : ''
              }`}
              onClick={() => handleColorSelection(color)}
              onKeyDown={() => handleColorSelection(color)}
            >
              {color}
            </li>
          ))}
        </ul>
      );

      
    }

    if (type === 'fuel') {
      return (
        <ul>
          {items.map((fuelType) => (
            <li
              key={fuelType}
              className={`rounded-md py-2 px-4 hover:bg-gray-200 hover:text-gray-700 cursor-pointer w-full ${
                selectedFuelType === fuelType ? 'bg-[#2b4e47] text-white' : ''
              }`}
              onClick={() => handleFuelSelection(fuelType)}
              onKeyDown={() => handleFuelSelection(fuelType)}
            >
              {fuelType}
            </li>
          ))}
        </ul>
      );
    }

    if (type === 'engine') {
      return (
        <ul>
          {items.map((engineState) => (
            <li
              key={engineState}
              className={`rounded-md py-2 px-4 hover:bg-gray-200 hover:text-gray-700 cursor-pointer w-full ${
                selectedEngineState === engineState ? 'bg-[#2b4e47] text-white' : ''
              }`}
              onClick={() => handleEngineSelection(engineState)}
              onKeyDown={() => handleEngineSelection(engineState)}
            >
              {engineState}
            </li>
          ))}
        </ul>
      );
    }

    if (type === 'price') {
      return (
        <div>
          <input
            type="number"
            value={startPrice}
            onChange={(event) => handleRangeChange(event.target.value, endPrice, setStartPrice, setEndPrice)}
            placeholder="از قیمت ... تومان"
            className="w-full px-2 py-1 mb-2 border border-gray-300 rounded"
          />
          <input
            type="number"
            value={endPrice}
            onChange={(event) => handleRangeChange(startPrice, event.target.value, setStartPrice, setEndPrice)}
            placeholder="تا قیمت ... تومان"
            className="w-full px-2 py-1 mb-2 border border-gray-300 rounded"
          />
        </div>
      );
    }


    return null;
  };

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
          {renderInputFields()}
        </div>
      )}
    </div>
  );
};

export default DropDownMenu;