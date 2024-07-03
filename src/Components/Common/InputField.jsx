import { func, object, string, number, oneOfType } from "prop-types";
import React from "react";

export default function InputField({ item, handleChange, value }) {
  return (
    <div className="flex flex-col">
      <label className="text-lg font-semibold font-dast" htmlFor="">
        {item.label}
      </label>
      {React.createElement(item.type, {
        onChange(e) {
          const newValue = item.valueConverter
            ? item.valueConverter(e)
            : e.target.value;
          handleChange(newValue, item.name);
        },
        value: value,
        className: `input-form ${item.className} font-dast`,
        ...item.props,
      })}
    </div>
  );
}

InputField.propTypes = {
  item: object.isRequired,
  handleChange: func.isRequired,
  value: oneOfType([string, number]).isRequired,
};
