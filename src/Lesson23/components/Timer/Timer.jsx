import { useEffect, useState } from "react";

import "./Timer.scss";

const Timer = ({
  hours,
  minutes,
  seconds,
  hoursSetter,
  minutesSetter,
  secondsSetter,
}) => {
  if (seconds === 60) {
    minutesSetter((prevState) => prevState + 1);
    secondsSetter(0);
  }

  if (minutes === 60) {
    hoursSetter((prevState) => prevState + 1);
    minutesSetter(0);
    secondsSetter(0);
  }

  return (
    <div className="timer">
      <p className="elements">Hours:Minutes:Seconds</p>
      <p className="timerNumbers">
        {hours < 10 ? `0${hours}` : hours}:
        {minutes < 10 ? `0${minutes}` : minutes}:
        {seconds < 10 ? `0${seconds}` : seconds}
      </p>
    </div>
  );
};

export default Timer;
