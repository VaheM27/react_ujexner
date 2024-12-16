import { AddUser, Home, Users } from "./pages";
import Layout from "./Layout/Layout";
import NotFound from "./pages/NotFound/NotFound";

import "./App.css";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/adduser" element={<AddUser />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
