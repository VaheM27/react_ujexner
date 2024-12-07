import React from "react";
import { Routes, Route } from "react-router-dom";
import ROUTES from "./Routes";

import {
  Home,
  NotFound,
  Products,
  Users,
  ToDos,
  UserPage,
  ProductPage,
} from "./pages";
// import Nav from "./components/Nav/Nav";
// import Footer from "./components/Footer/Footer";

import "./App.css";
import Layout from "./Layout/Layout";

const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route path={ROUTES.HOME} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={ROUTES.PRODUCTS} element={<Products />} />
          <Route path={ROUTES.USERS} element={<Users />} />
          <Route path={ROUTES.TODOS} element={<ToDos />} />
          <Route path={"*"} element={<NotFound />} />
          <Route path={ROUTES.USER} element={<UserPage />} />
          <Route path={ROUTES.PRODUCT} element={<ProductPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
