import { func, number, string } from "prop-types";

export default function InputForm({
  placeHolder,
  type,
  handleChange,
  fieldkey,
}) {
  return (
    <input
      dir="rtl"
      onChange={(e) => {
        handleChange(e, fieldkey);
      }}
      className="input-form"
      placeholder={placeHolder}
      type={type || "text"}
    />
  );
}

InputForm.propTypes = {
  placeHolder: string,
  type: string,
  handleChange: func,
  fieldkey: number,
};
