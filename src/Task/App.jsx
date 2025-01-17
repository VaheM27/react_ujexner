import React from "react";
import Nav from "./components/Nav/Nav";
import Weather from "./components/Weather/Weather";

import "./App.css";

const App = () => {
  return (
    <div className="main">
      <Nav />
      <Weather />
    </div>
  );
};

export default App;
