import React, { useEffect } from "react";

import "./Modal.scss";

const Modal = ({ performAction, cancelAction }) => {
  useEffect(() => {
    function closeModal(e) {
      if (e.target.className === "container") {
        cancelAction();
      }
    }
    window.addEventListener("click", closeModal);

    return () => window.removeEventListener("click", closeModal);
  }, []);

  return (
    <div className="container">
      <div className="box">
        <p>Are you sure you want to delete this?</p>
        <div className="btns">
          <button onClick={() => performAction()}>Yes</button>
          <button onClick={cancelAction}>No</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
