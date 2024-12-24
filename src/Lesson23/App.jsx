import { useState } from "react";
import Timer from "./components/Timer/Timer";
import Button from "./components/Button/Button";

import "./App.scss";

const App = () => {
  let [hour, setHour] = useState(0);
  let [minute, setMinute] = useState(0);
  let [second, setSecond] = useState(0);


  return (
    <div className="app">
      <Timer
        hours={hour}
        minutes={minute}
        seconds={second}
        hoursSetter={setHour}
        minutesSetter={setMinute}
        secondsSetter={setSecond}
      />
      <div className="btns">
        <Button
          hoursSetter={setHour}
          minutesSetter={setMinute}
          secondsSetter={setSecond}
        />
      </div>
    </div>
  );
};

export default App;
