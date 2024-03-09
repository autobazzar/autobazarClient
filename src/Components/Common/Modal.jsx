import React from "react";
import "./common.css";
export default function Modal({ children, handleClose, isOpen }) {
  return (
    isOpen && (
      <div className="modal">
        <div className="modal-container">{children}</div>
        <div className="modal-backdrop" onClick={handleClose}></div>
      </div>
    )
  );
}
