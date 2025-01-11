import React, { useEffect, useState } from "react";
import Nav from "./components/Nav/Nav";
import Body from "./components/Body/Body";

import "./App.scss";

const App = () => {
  const [city, setCity] = useState("Yerevan");
  const [temp, setTemp] = useState("celsius");

  return (
    <div className="app">
      <Nav locationChange={setCity} tempChange={setTemp} />
      <Body location={city} type={temp} />
    </div>
  );
};

export default App;
