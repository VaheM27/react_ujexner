import React, { useReducer } from "react";
import { Route, Routes } from "react-router-dom";
import { Login, Register, Profile } from "./pages";
import NotFound from "./pages/NotFound/NotFound";
import ROUTES from "./Rountes";
import Layout from "./Layout/Layout";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import LogOut from "./pages/LogOut/LogOut";
// import reducer, { initialState } from "./reducer";
// import { ADDDEVELOPER, ADDNUMBER, CHANGEUSER, ADDAGE } from "./actionTypes";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path={ROUTES.LOGIN}>
          <Route index element={<Login />} />
          <Route path={ROUTES.REGISTER} element={<Register />} />
          <Route path={ROUTES.PROFILE} element={<Profile />} />
          <Route path={ROUTES.LOGOUT} element={<LogOut />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
