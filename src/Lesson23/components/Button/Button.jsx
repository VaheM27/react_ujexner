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

  const timerControl = () => {
    btnType === "play"
      ? setTimerBehavior(1)
      : btnType === "pause"
      ? setTimerBehavior(0)
      : setTimerBehavior(-1);
  };

  useEffect(() => {
    switch (timerBehavior) {
      case 1:
        intervalRef.current = setInterval(() => {
          secondsSetter((prevState) => prevState + 1);
        }, 1000);
        break;
      case 0:
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        hoursSetter(hours);
        minutesSetter(minutes);
        secondsSetter(seconds);
        break;
      case -1:
        clearTimeout(intervalRef.current);
        hoursSetter(0);
        minutesSetter(0);
        secondsSetter(0);
        break;
      default:
        break;
    }
  }, [timerControl]);

  return (
    <button className="btn" onClick={() => timerControl()}>
      {btnType === "play" ? (
        <Icon path={mdiPlayCircle} size={2} />
      ) : btnType === "pause" ? (
        <Icon path={mdiPauseCircle} size={2} />
      ) : (
        <Icon path={mdiStopCircle} size={2} />
      )}
    </button>
  );
};

export default Button;
