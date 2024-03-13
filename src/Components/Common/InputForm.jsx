import React from "react";

export default function InputForm({ placeHolder, type, handleChange, fieldkey }) {
  return (
    <input
      onChange={(e) => {handleChange(e, fieldkey)}}
      className="input-form"
      placeholder={placeHolder}
      type={type || "text"}
    />
  );
}
