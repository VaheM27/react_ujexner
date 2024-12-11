import { Route, Routes } from "react-router-dom";
import { Home, SignUp, Users } from "./pages";
import Layout from "./Layout/Layout";

import "./App.css";

const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
