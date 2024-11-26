import React from "react";
import { Route, Routes } from "react-router-dom";
import { About, ContactUs, Home } from "./pages";
import NotFound from "./pages/NotFound/NotFound";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import ROUTES from "./Routes";

import "./App.css";

const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path={ROUTES.HOME}>
          <Route index element={<Home />} />
          <Route path={ROUTES.ABOUT} element={<About />} />
          <Route path={ROUTES.CONTACTUS} element={<ContactUs />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
