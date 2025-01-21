import React, { useState, useRef, useEffect } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const timerRef = useRef(null);
  const isRunning = useRef(false);

  const startTimer = () => {
    if (isRunning.current) return;
    isRunning.current = true;
    timerRef.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
    isRunning.current = false;
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    setSeconds(0);
    isRunning.current = false;
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  return (
    <div>
      <h1>Timer: {seconds} seconds</h1>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default Timer;
