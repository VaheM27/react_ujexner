import { useState } from "react";
import Timer from "./components/Timer/Timer";
import Button from "./components/Button/Button";

import "./App.scss";

const App = () => {
  let [hour, setHour] = useState(0);
  let [minute, setMinute] = useState(0);
  let [second, setSecond] = useState(0);

  const btnTypes = ["play", "pause", "stop"];

  return (
    <div className="App">
      <Timer
        hours={hour}
        minutes={minute}
        seconds={second}
        hoursSetter={setHour}
        minutesSetter={setMinute}
        secondsSetter={setSecond}
      />
      <div className="btns">
        {btnTypes.map((elm, i) => {
          return (
            <Button
            key={i}
              btnType={elm}
              hours={hour}
              minutes={minute}
              seconds={second}
              hoursSetter={setHour}
              minutesSetter={setMinute}
              secondsSetter={setSecond}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
