import { useState } from "react";

export const ComTwo = () => {
  const [input, setInput] = useState("");

  function showText(userText) {
    setInput(userText);
  }

  return (
    <div>
      <input type="text" onChange={(e) => showText(e.target.value)} />
      <p>{input}</p>
    </div>
  );
};
