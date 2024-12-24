import { useEffect, useRef, useState } from "react";
import Icon from "@mdi/react";
import { mdiPlayCircle, mdiPauseCircle, mdiStopCircle } from "@mdi/js";

import "./Button.scss";

const Button = ({ hoursSetter, minutesSetter, secondsSetter }) => {
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    let timeInterval = null;
    if (paused === true) {
      timeInterval = setInterval(() => {
        secondsSetter((prevState) => {
          if (prevState === 59) {
            minutesSetter((minutePrevState) => {
              if (minutePrevState === 59) {
                hoursSetter(hoursSetter + 1);
              } else {
                return minutePrevState + 1;
              }
            });
            return 0;
          } else {
            return prevState + 1;
          }
        });
      }, 1000);
    }
    return () => clearInterval(timeInterval);
  }, [paused]);

  const play = () => {
    setPaused(true);
  };

  const pause = () => {
    setPaused(false);
  };

  const stop = () => {
    setPaused(false);
    secondsSetter(0);
    minutesSetter(0);
    hoursSetter(0);
  };

  return (
    <>
      <button className="btn" onClick={play}>
        <Icon path={mdiPlayCircle} size={2} />
      </button>
      <button className="btn" onClick={pause}>
        <Icon path={mdiPauseCircle} size={2} />
      </button>
      <button className="btn" onClick={stop}>
        <Icon path={mdiStopCircle} size={2} />
      </button>
    </>
  );
};

export default Button;
