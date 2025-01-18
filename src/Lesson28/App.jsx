import React from "react";
import Register from "./components/Register/Register";
import Dashboard from "./components/Dashboard/Dashboard";
import { Route, Routes } from "react-router-dom";
import { ROUTES } from "./Routes";

import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path={ROUTES.HOME} element={<Register />} />
        <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default App;
