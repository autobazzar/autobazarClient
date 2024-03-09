import React from "react";
import "./common.css";

export default function IconButton({ title, clickHandler, Icon }) {
  return (
    <button className="icon-button" onClick={clickHandler}>
      <Icon /> {title}
    </button>
  );
}
