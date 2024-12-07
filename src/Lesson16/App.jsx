import React, { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Board, Details } from "./pages";
import ROUTES from "./Routes";

import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Navigate to={ROUTES.DASHBOARD} replace />} />
        <Route path={ROUTES.DASHBOARD} element={<Board />} />
        <Route
          path={`${ROUTES.DETAILS}/:a/:b/:c/:d/:e/:f/:g?`}
          element={<Details />}
        />
      </Routes>
    </div>
  );
};

export default App;
