import { func } from "prop-types";
import React from "react";

export default function InputField({ item, handleChange }) {
  return (
    <div className="flex flex-col">
      <label className="text-lg font-semibold text-white" htmlFor="">
        {item.label}
      </label>
      {React.createElement(item.type, {
        onChange(e) {
          const value = item.valueConverter
            ? item.valueConverter(e)
            : e.target.value;
          handleChange(value, item.name);
        },
        className: `input-form ${item.className}`,
        ...item.props,
      })}
    </div>
  );
}

InputField.propTypes = {
  item: {},
  handleChange: func,
};
