import { Routes, Route } from "react-router-dom";
import Layout from "../Lesson17/Layout/Layout";
import Home from "./pages/Home/Home";
import User from "./pages/User/User";
import Registration from "./pages/Registration/Registration";
import Register2 from "./pages/Register2/Register2";
import "./App.scss";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/:username" element={<User />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/registration/:username" element={<Register2 />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
