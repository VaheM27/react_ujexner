import React from "react";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;