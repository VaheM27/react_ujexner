import { useEffect, useState } from "react";

import "./Timer.scss";

const Timer = ({
  hours,
  minutes,
  seconds,
}) => {


  return (
    <div className="timer">
      <p className="timerNumbers">
        {hours < 10 ? `0${hours}` : hours}:
        {minutes < 10 ? `0${minutes}` : minutes}:
        {seconds < 10 ? `0${seconds}` : seconds}
      </p>
    </div>
  );
};

export default Timer;
