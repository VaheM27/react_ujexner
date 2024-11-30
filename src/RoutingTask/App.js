import React from "react";
import { Routes, Route } from "react-router-dom";

import Nav from "./components/Nav/Nav";
import { Home, AboutUs, Contact, NotFound } from "./pages";
import Footer from "./components/Footer/Footer";

import "./App.css";

const App = () => {
  return (
    <div className="container">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
