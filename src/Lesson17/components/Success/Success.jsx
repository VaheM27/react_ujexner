import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../Modal/Modal";
import "./Success.scss";

const Success = ({ name }) => {
  const [modal, setModal] = useState("modal");
  const modalDisplay = () => {
    setModal(modal === "modal" ? "modal activated" : "modal");
  };
  return (
    <div className="success">
      <Modal modal={modal} modalDisplay={modalDisplay} userName={name} />
      <h1>Welcome {name}</h1>
      <p>
        Registration was successfully completed! <br />
        If you enjoy my work please give a{" "}
        <button onClick={() => modalDisplay()}>Feedback!</button>
      </p>
      <p>If you want to sign in your account click on</p>
      <Link to="/">Sign in</Link>
    </div>
  );
};

export default Success;
