import React from "react";
import { Route, Routes } from "react-router-dom";
import { Users, Posts, Home } from "./pages";
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
          <Route path={ROUTES.USERS} element={<Users />} />
          <Route path={ROUTES.POSTS} element={<Posts />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
