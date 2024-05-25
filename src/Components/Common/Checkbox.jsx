import { string, func } from "prop-types";
import { useState } from "react";
export default function Checkbox({text, onChange}) {
   const [isAccidental, setIsAccidental] = useState(false);  
   const handleAccidentalChange = (event) => {
        setIsAccidental(event.target.checked);
        onChange(event.target.checked);
    };
    
  return (
    <>
        <div className="flex items-center px-4 py-4 w-[84%]">
            <input 
                   checked={isAccidental}
                   onClick={handleAccidentalChange}
                   onKeyDown={handleAccidentalChange}
                   id="default-checkbox" 
                   type="checkbox" 
                   className="w-4 h-4 accent-[#2b4e47] text-[#2b4e47] rounded "
            />
            <label htmlFor="default-checkbox" className="ms-2 text-sm font-sm text-gray-700">{text}</label>
        </div>
        <div className="border-b border-gray-300 w-[84%]"></div>
    </>
  )
}

Checkbox.propTypes = {
    text: string,
    onChange: func,
};