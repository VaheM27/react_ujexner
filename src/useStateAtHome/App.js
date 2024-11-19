import { IncrementDecrement } from "./Components/IncrementDecrement/IncrementDecrement";
import { ShowUserText } from "./Components/ShowUserText/ShowUserText";
import { DivHidden } from "./Components/DivHidden/DivHidden";
import { OneClickPlusDiv } from "./Components/OneClickPlusDiv/OneClickPlusDiv";
import { UseEffect } from "./Components/useEffect/useEffect";

import "./App.css";

const App = () => {
  return (
    <div className="container">
      <IncrementDecrement />
      <ShowUserText />
      <DivHidden />
      <OneClickPlusDiv />
      <UseEffect />
    </div>
  );
};

export default App;
