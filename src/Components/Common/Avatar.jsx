import { string } from "prop-types";
import carImage from "../../assets/image/car.jfif";
const types = ["brand", "color", "year", "activity", "price", "body", "fuel", "isCrashed", "engine", "location", "thirdPartyIn"]

export default function Avatar({ imgSrc }) {
  return (
    <div className="select-none w-[150%] h-full">
      <img
        className="pointer-events-none w-full h-full max-w-[14rem] rounded-md"
        src={imgSrc || carImage}
        alt=""
      />
    </div>
  );
}

Avatar.propTypes = {
  imgSrc: string,
};
