import { useRef ,useState,useEffect} from "react";
import Item from "./Item";
import useSlider from "../../hooks/useSlider";
import { node } from "prop-types";
import { receiveAds } from "../../api/api";

export default function Slider({ mainDiv, className }) {
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
  return (
    <div className={`relative overflow-hidden ${className}`}>
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
            <Item
              key={ad.adId}
              id={ad.adId}
              ad={ad}
              type="slider"
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
