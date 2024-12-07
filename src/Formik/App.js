import React from "react";
import Inputs from "./components/Inputs/Inputs";
import DataDivs from "./components/DataDivs/DataDivs";

import "./App.css";

const App = () => {
  return (
    <div className="container">
      <Inputs />
      <DataDivs />
    </div>
  );
};

export default App;
