import { useRef ,useState,useEffect} from "react";
import SliderItem from "./SliderItem";
import useSlider from "../../hooks/useSlider";
import { node } from "prop-types";
import { receiveAds } from "../../api/api";

let id = 0;
export default function Slider({ mainDiv }) {
  const [ads, setAds] = useState([]);
  useEffect(() => {
    const fetchAds = async () => {
      try {
        const response = await receiveAds();
        setAds(response.data);
      } catch (error) {
        console.error('Error fetching ads data:', error);
      }
    };
    fetchAds();
    
  }, []);
  const sliderRef = useRef(null);
  const [handleMouseDown, handleMoveOver, handlMouseUp, translate] = useSlider(
    mainDiv,
    sliderRef
  );
  const arr = Array(10)
    .fill(0)
    .map(() => id++);
  return (
    <div className="relative overflow-hidden ">
      <div
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
        onMouseMove={handleMoveOver}
        onTouchMove={handleMoveOver}
        onTouchEnd={handlMouseUp}
        onMouseUp={handlMouseUp}
        style={{ transform: `translate(${translate}px)` }}
        className="w-full cursor-pointer relative flex flex-row gap-5 bg-[var(--slider-background)] p-5 text-[var(--text-black)]"
      >
        {ads.map((ad) => {
          return (
            <SliderItem
              key={ad.adId}
              id={ad.adId}
              ad={ad}
            />
          );
        })}
      </div>
    </div>
  );
}

Slider.propTypes = {
  mainDiv: node,
};
