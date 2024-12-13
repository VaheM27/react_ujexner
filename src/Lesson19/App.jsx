import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, NotFound, Dashboard } from "./pages";
import ROUTES from "./Routes";
import Layout from "./Layout/Layout";

import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path={ROUTES.HOME} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={ROUTES.DETAILS} element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
