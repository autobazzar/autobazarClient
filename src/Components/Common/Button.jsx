import PropTypes from 'prop-types'
export default function Button({ text , className,type,onClick}) {
  return (
    <button type={type} onClick={onClick} className={`rounded-md bg-[#2b4e47] lg:w-[12%] shadow-lg hover:bg-[#4C857A] text-center text-white ${className}`}>
      {text}
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};