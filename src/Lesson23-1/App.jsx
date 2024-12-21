import { useEffect, useRef, useState } from "react";
import "./App.css";

const App = () => {
  const [number, setNumber] = useState(0);
  const ref = useRef(0);
  const inputRef = useRef(null);
  const inputRef2 = useRef(null);

  useEffect(() => {
    console.log("Render");
  }, [number]);

  const handelClick = () => {
    ref.current++;
    if (ref.current === 20) {
      setNumber(ref.current);
    }
    console.log(ref.current);
    // console.log(ref.current, "current");
    // inputRef.current.focus();
    // inputRef2.current.style.backgroundColor = "";
    // inputRef.current.style.backgroundColor = "red";
    // setNumber((prev) => prev + 1);
  };

  const handelClick2 = () => {
    // ref.current++;
    // console.log(ref.current);
    inputRef2.current.focus();
    inputRef.current.style.backgroundColor = "";
    inputRef2.current.style.backgroundColor = "green";
  };

  return (
    <div>
      <p>{number}</p>
      <button onClick={handelClick}>Click</button>
      <button onClick={handelClick2}>Click</button>
      <input
        type="text"
        placeholder="Text"
        ref={inputRef}
        onChange={handelClick}
      />
      <input
        type="text"
        placeholder="Text"
        ref={inputRef2}
        onChange={handelClick}
      />
    </div>
  );
};

export default App;
