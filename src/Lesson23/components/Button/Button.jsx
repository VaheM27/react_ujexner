import { useEffect, useRef, useState } from "react";
import Icon from "@mdi/react";
import { mdiPlayCircle, mdiPauseCircle, mdiStopCircle } from "@mdi/js";

import "./Button.scss";

const Button = ({
  btnType,
  hoursSetter,
  minutesSetter,
  secondsSetter,
  hours,
  minutes,
  seconds,
}) => {
  const [timerBehavior, setTimerBehavior] = useState(0);
  const intervalRef = useRef(null);
  const [paused, setPaused] = useState(false);

  const timerControl = () => {
    if (btnType === "play") {
      setTimerBehavior(1);
    } else if (btnType === "pause") {
      setTimerBehavior(0);
    } else if (btnType === "stop") {
      setTimerBehavior(-1);
    }
  };

  useEffect(() => {
    if (timerBehavior === 1) {
      intervalRef.current = setInterval(() => {
        secondsSetter((prevState) => prevState + 1);
      }, 1000);
    } else if (timerBehavior === 0) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      hoursSetter(hours);
      minutesSetter(minutes);
      secondsSetter(seconds);
    } else if (timerBehavior === -1) {
      hoursSetter(0);
      minutesSetter(0);
      secondsSetter(0);
    }
    return () => clearTimeout(intervalRef.current);
  }, [timerControl, hours, minutes, seconds]);

  return (
    <button className="btn" onClick={() => timerControl()}>
      {btnType === "play" ? (
        <Icon path={mdiPlayCircle} size={1} />
      ) : btnType === "pause" ? (
        <Icon path={mdiPauseCircle} size={1} />
      ) : (
        <Icon path={mdiStopCircle} size={1} />
      )}
    </button>
  );
};

export default Button;
