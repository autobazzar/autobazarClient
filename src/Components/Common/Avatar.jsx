import { string } from "prop-types";
import carImage from "../../assets/image/carr.png";
const types = ["brand", "color", "year", "activity", "price", "body", "fuel", "isCrashed", "engine", "location", "thirdPartyIn"]

export default function Avatar({ imgSrc, className }) {
  const handleImageError = (e) => {
    e.target.src = carImage; // Set carImage as the source if imgSrc fails to load
  };

  return (
    <div className={`select-none w-[150%] h-full ${className}`}>
      <img
        className="pointer-events-none w-full h-full max-w-[14rem] rounded-md"
        src={imgSrc || carImage}
        onError={handleImageError} // Handle image load error
        alt=""
      />
    </div>
  );
}

Avatar.propTypes = {
  imgSrc: string,
  className: string
};
