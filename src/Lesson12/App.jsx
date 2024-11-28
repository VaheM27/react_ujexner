import React from "react";
import { Route, Routes } from "react-router-dom";
import {Home, User, Car, Fruit, Time } from "./pages/import";
import NotFound from "./pages/NotFound/NotFound";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import ROUTES from "./Routes";

import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Nav />
      <Routes>
        <Route path={ROUTES.HOME}>
          <Route index element={<Home />} />
          <Route path={ROUTES.USER} element={<User />} />
          <Route path={ROUTES.CAR} element={<Car />} />
          <Route path={ROUTES.FRUIT} element={<Fruit/>}/>
          <Route path={ROUTES.TIME} element={<Time/>}/>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
