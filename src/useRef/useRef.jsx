import { useRef, useState } from "react";

import "./useRef.scss";

const UseRef = () => {
  const timerRef = useRef(null);
  const [seconds, setSeconds] = useState(0);

  function TimerPlay() {
    if (!timerRef.current) {
      timerRef.current = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1);
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
    <div className="main-div">
      <div>
        <div>
          <h1 className="h1">React-ի Բեսամբ Timer</h1>
          <img src="logo192.png" alt="" />
        </div>
        <div>
          <h2 className="h2">{Timer(seconds)}</h2>
        </div>
      </div>
      <div className="buttons-div">
        <button onClick={TimerPlay} className="PLay">
          <i class="bi bi-play-fill"></i>
        </button>
        <button onClick={TimerPause} className="Pause">
          <i class="bi bi-pause"></i>
        </button>
        <button onClick={TimerStop} className="Stop">
          <i class="bi bi-stop-circle"></i>
        </button>
      </div>
    </div>
  );
};

export default UseRef;
