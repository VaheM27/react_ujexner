import React from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Body from "./components/Body/Body";
import { About, ContactUs, Home } from "./pages";
import Footer from "./components/Footer/Footer";
import NotFound from "./pages/NotFound/NotFound";

import "./App.css";

const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Body />
      <Footer />
    </div>
  );
};

export default App;
