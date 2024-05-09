import { element, func, string } from "prop-types";
import "./common.css";

export default function IconButton({ title, clickHandler, Icon ,className}) {
  return (
    <button className={className ?? "icon-button"} onClick={clickHandler}>
      <Icon /> {title}
    </button>
  );
}

IconButton.propTypes = {
  title: string,
  Icon: element,
  clickHandler: func,
  className:string,
};
