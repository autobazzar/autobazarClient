import { useEffect, useRef, useState } from "react";
export default function useSlider(mainbody, sliderdiv) {
  const [translate, settranslate] = useState(0);

  const valueRef = useRef({
    isDragging: false,
    maxTranslate: null,
    minTranslate: null,
    posX1: 0,
  });

  useEffect(() => {
    if (mainbody && sliderdiv) {
      const sliderwidth = parseFloat(
        window.getComputedStyle(sliderdiv.current).width
      );
      const mainbodywidth = parseFloat(
        window.getComputedStyle(mainbody.current).width
      );
      valueRef.current.maxTranslate = Math.abs(
        sliderwidth * 1.3 - mainbodywidth
      );
      valueRef.current.minTranslate = -2500;
    }
  }, []);

  function handleMouseDown(e) {
    valueRef.current.isDragging = true;
    valueRef.current.posX1 = getPosition(e);
  }
  function getPosition(event) {
    return event.type === "touchstart"
      ? event.touches[0].clientX
      : event.type == "touchmove"
      ? event.touches[0].clientX
      : event.clientX;
  }
  function handlMouseUp(e) {
    valueRef.current.isDragging = false;
  }
  function handleMoveOver(e) {
    if (valueRef.current.isDragging) {
      const position = getPosition(e);
      const newtranlate = position - valueRef.current.posX1;
      if (
        newtranlate < valueRef.current.maxTranslate &&
        newtranlate > valueRef.current.minTranslate
      ) {
        settranslate(newtranlate);
      }
    }
  }
  return [handleMouseDown, handleMoveOver, handlMouseUp, translate];
}
