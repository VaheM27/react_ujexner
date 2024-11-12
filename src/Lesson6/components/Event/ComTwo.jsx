import { useState } from "react";

export const ComTwo = () => {
  const [input, setInput] = useState("");

  function showUserText(userText) {
    setInput(userText)
  }

  return (
    <div>
      <input type="text" onChange={(e) => showUserText(e.target.value)} />
      <p>{input}</p>
    </div>
  );
};
