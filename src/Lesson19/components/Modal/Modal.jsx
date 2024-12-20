import { useEffect } from "react";

import "./Modal.css";

const Modal = ({ toggleMod, clickFuntion, firstText, lastText, mainText }) => {
  useEffect(() => {
    function closeModal(e) {
      if (e.target.className === "modalContainer") {
        toggleMod();
      }
    }
    window.addEventListener("click", closeModal);

    return () => window.removeEventListener("click", closeModal);
  }, []);

  return (
    <div className="modalContainer">
      <div className="modal">
        <h2>{mainText}</h2>
        <div className="buttons">
          <button onClick={clickFuntion}>{firstText}</button>
          <button onClick={toggleMod}>{lastText}</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
