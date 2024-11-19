import { useState } from "react";
import "./ShowUserText.css";

export const ShowUserText = () => {
  const [userText, setUserText] = useState("");

  function showText(userText) {
    setUserText(userText.target.value);
  }

  return (
    <div >
      <h1>User Text Show</h1>
      <input type="text" onChange={showText} />
      <p>{userText}</p>
    </div>
  );
};
