import React from "react";
import { Route, Routes } from "react-router-dom";
import { About, ContactUs, Home, Products } from "./pages";
import NotFound from "./pages/NotFound/NotFound";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import ROUTES from "./Routes";

import "./App.css";
import EachProduct from "./pages/EachProduct/EachProduct";

const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path={ROUTES.HOME}>
          <Route index element={<Home />} />
          <Route path={ROUTES.ABOUT} element={<About />} />
          <Route path={ROUTES.CONTACTUS} element={<ContactUs />} />

          <Route path={ROUTES.PRODUCTS} element={<Products />} />

          <Route path={ROUTES.PRODUCT} element={<EachProduct />} />
          
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
