import { useState, useEffect } from "react";
import "./App.scss";
import {
  Zero,
  One,
  Two,
  Three,
  Four,
  Five,
  Six,
  Seven,
  Eight,
  Nine,
} from "./components/number/Number";

const App = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false); 

  useEffect(() => {
    let timer = null;
    if (isRunning) {
      timer = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleStop = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  const formatTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;
    return `${hours.toString().padStart(2, "0")}${minutes
      .toString()
      .padStart(2, "0")}${secs.toString().padStart(2, "0")}`;
  };

  const renderDigit = (digit) => {
    switch (digit) {
      case 0:
        return <Zero />;
      case 1:
        return <One />;
      case 2:
        return <Two />;
      case 3:
        return <Three />;
      case 4:
        return <Four />;
      case 5:
        return <Five />;
      case 6:
        return <Six />;
      case 7:
        return <Seven />;
      case 8:
        return <Eight />;
      case 9:
        return <Nine />;
      default:
        return <Zero />;
    }
  };

  const timeDigits = formatTime(seconds)
    .split("")
    .map((char) => parseInt(char, 10));

  return (
    <div className="container">
      <div className="timer">
        <div className="display">
          <div className="hours">
            {renderDigit(timeDigits[0])}
            {renderDigit(timeDigits[1])}
          </div>
          <span>:</span>
          <div className="minutes">
            {renderDigit(timeDigits[2])}
            {renderDigit(timeDigits[3])}
          </div>
          <span>:</span>
          <div className="seconds">
            {renderDigit(timeDigits[4])}
            {renderDigit(timeDigits[5])}
          </div>
        </div>
        <div className="controller">
          <button onClick={handleStart}>
            <i className="bi bi-play-fill"></i>
          </button>
          <button onClick={handlePause}>
            <i className="bi bi-pause-fill"></i>
          </button>
          <button onClick={handleStop}>
            <i className="bi bi-stop-fill"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
