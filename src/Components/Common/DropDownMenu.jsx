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
  const [location, setLocation] = useState('');
  const [carName, setCarName] = useState('');
  const [startValue, setStartValue] = useState('');
  const [endValue, setEndValue] = useState('');
  const [errorIns, setErrorIns] = useState('');
  

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

  const handleLocationChange = (loc) => {
    setLocation(loc);
    onChange(loc);
  };

  const handleCarNameChange = (carName) => {
    setCarName(carName);
    onChange(carName);
  };

  const handleInsRangeChange = (start, end) => {
    const isValidStart = start >= 0 && start <= 12;
    const isValidEnd = end >= 0 && end <= 12;

    if (isValidStart && isValidEnd) {
      setStartValue(start);
      setEndValue(end);
      onChange(start, end)
      setErrorIns('');
    } else {
      setErrorIns('لطفا ماه وارد شده بین 1 تا 12 باشد.');
    }
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
            placeholder="از سال مثلا 1395"
            className="w-full px-2 py-1 mb-2 border border-gray-300 rounded"
          />
          <input
            type="number"
            value={endYear}
            onChange={(event) => handleRangeChange(startYear, event.target.value, setStartYear, setEndYear)}
            placeholder="تا سال مثلا 1400"
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
            placeholder="از مثلا 10000 کیلومتر"
            className="w-full px-2 py-1 mb-2 border border-gray-300 rounded"
          />
          <input
            type="number"
            value={endDis}
            onChange={(event) => handleRangeChange(startDis, event.target.value, setStartDis, setEndDis)}
            placeholder="تا مثلا 25000 کیلومتر"
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
            placeholder="از مثلا 200000000 تومان"
            className="w-full px-2 py-1 mb-2 border border-gray-300 rounded"
          />
          <input
            type="number"
            value={endPrice}
            onChange={(event) => handleRangeChange(startPrice, event.target.value, setStartPrice, setEndPrice)}
            placeholder="تا مثلا 500000000 تومان"
            className="w-full px-2 py-1 mb-2 border border-gray-300 rounded"
          />
        </div>
      );
    }

    if (type === 'insurance') {
      return (
        <div>
          <input
            type="number"
            value={startValue}
            onChange={(event) => handleInsRangeChange(event.target.value, endValue)}
            placeholder="از مثلا 4 ماه"
            className={`w-full px-2 py-1 mb-2 border ${errorIns ? 'border-red-500 focus:border-red-500' : 'border-gray-300'} rounded`}
          />
          <input
            type="number"
            value={endValue}
            onChange={(event) => handleInsRangeChange(startValue, event.target.value)}
            placeholder="تا مثلا 8 ماه"
            className={`w-full px-2 py-1 mb-2 border ${errorIns ? 'border-red-500 focus:border-red-500' : 'border-gray-300'} rounded`}
          />
          {errorIns && <p className="text-red-500">{errorIns}</p>}
        </div>
      );
    }

    if(type == "location"){
      return(
          <input
            type="text"
            value={location}
            onChange={(event) => handleLocationChange(event.target.value)}
            placeholder="مثلا تهران، کرج"
            className={`w-full px-2 py-1 mb-2 border rounded`}
          />
      );
    }

    if(type == "carName"){
      return(
        <input
          type="text"
          value={carName}
          onChange={(event) => handleCarNameChange(event.target.value)}
          placeholder="مثلا دنا پلاس"
          className={`w-full px-2 py-1 mb-2 border rounded`}
        />
      );
    }


    return null;
  };

  return (
    <div ref={dropdownRef} className="relative hover:bg-[#F1F5F6]">
      <button
        className="w-full lg:w-[84%] text-sm py-4 px-4 border-b border-gray-300 text-gray-700 text-right"
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