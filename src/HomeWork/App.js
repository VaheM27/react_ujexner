import React from "react";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import { Users, Posts, Photos, NotFound } from "./pages";

import "./App.css";

const App = () => {
  return (
    <div className="container">
      <Nav />
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
