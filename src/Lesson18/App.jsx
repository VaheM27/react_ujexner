import React from "react";
import { Routes, Route } from "react-router-dom";
import ROUTES from "./Routes";
import { Login, Registration, Profile } from "./pages";

import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path={ROUTES.LOGIN}>
          <Route index element={<Login />} />
          <Route path={ROUTES.REGISTER} element={<Registration />} />
          <Route path={ROUTES.PROFILE} element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
