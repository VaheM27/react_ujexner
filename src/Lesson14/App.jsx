import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import ROUTES from "./Routes";
import { Home, Items, Personal, NotFound, Person, ItemDetails } from "./pages";

import "./App.scss";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path={ROUTES.HOME} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={ROUTES.ITEMS} element={<Items />} />
          <Route path={ROUTES.ITEM} element={<ItemDetails />} />
          <Route path={ROUTES.PERSONAL} element={<Personal />} />
          <Route path={ROUTES.PERSON} element={<Person />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
