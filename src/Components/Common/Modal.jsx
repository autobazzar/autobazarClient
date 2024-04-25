import {createPortal} from 'react-dom'
import { bool, element, func } from "prop-types";
import "./common.css";
export default function Modal({ children, handleClose, isOpen }) {

  return (
    <>
      {isOpen &&
        createPortal(
          <div className="modal">
            <div className="modal-container">{children}</div>
            <div className="modal-backdrop" onClick={handleClose}></div>
          </div>,
          document.body
        )}
    </>
  );
}
Modal.propTypes = {
  children: element,
  handleClose: func,
  isOpen: bool,
};
