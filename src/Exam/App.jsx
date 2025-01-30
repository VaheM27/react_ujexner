import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ROUTES } from "./Routes";
import { Forecast, Home } from "./pages";
import Navbar from "./components/Navbar/Navbar";

import "./App.scss";

const App = () => {
  const [type, setType] = useState("celsius");

  return (
    <div className="app">
      <Navbar tempTypeSetter={setType} />
      <Routes>
        <Route path={ROUTES.HOME} element={<Home type={type} />} />
        <Route path={ROUTES.FORECAST} element={<Forecast type={type} />} />
      </Routes>
    </div>
  );
};

export default App;
