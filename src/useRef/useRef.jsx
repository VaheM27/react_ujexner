import { useRef, useState } from "react";

const UseRef = () => {
  const timerRef = useRef(null);
  const [seconds, setSeconds] = useState(0);

  function TimerPlay() {
    if (!timerRef.current) {
      timerRef.current = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    }
  }

  function TimerPause() {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }

  function TimerStop() {
    clearInterval(timerRef.current);
    timerRef.current = null;
    setSeconds(0);
  }

  function Timer(sec) {
    const second = Math.floor(sec % 60);
    const miuntes = Math.floor((sec % 3600) / 60);
    const hours = Math.floor(sec / 3600);

    return `${String(hours).padStart(2, "0")} : ${String(miuntes).padStart(
      2,
      "0"
    )} : ${String(second).padStart(2, "0")}`;
  }

  return (
    <div>
      <div>
        <h1>Timer</h1>
        <h2>{Timer(seconds)}</h2>
      </div>
      <div>
        <button onClick={TimerPlay}>Play</button>
        <button onClick={TimerPause}>Pause</button>
        <button onClick={TimerStop}>Stop</button>
      </div>
    </div>
  );
};

export default UseRef;
