import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Modal.scss";

const Modal = ({ modal, modalDisplay, userName }) => {
  const [thankYou, setThankYou] = useState("");
  const navigate = useNavigate();
  const feedback = (e) => {
    e.preventDefault();
    if (e.target[0].value.trim().length > 0) {
      try {
        axios({
          method: "POST",
          url: "http://localhost:3000/feedback",
          data: {
            name: userName,
            feedback: e.target[0].value,
          },
        }).then((response) => {
          console.log("Feedback sent successfully", response);
          e.target.reset();
          setThankYou(
            "Thank you for your feedback! You will be redirected to the sign-in page shortly."
          );
          setTimeout(() => {
            navigate("/");
          }, 3000);
        });
      } catch (error) {
        console.error("Unexpected error", error);
      }
    }
  };

  return (
    <>
      <div className={modal}>
        <form onSubmit={feedback}>
          <textarea
            name=""
            id=""
            placeholder="Please give your feedback."
            maxLength="250"></textarea>
          <button type="Submit" onClick={() => modalDisplay()}>
            Send
          </button>
        </form>
      </div>
      <p className="thankYou">{thankYou}</p>
    </>
  );
};

export default Modal;
