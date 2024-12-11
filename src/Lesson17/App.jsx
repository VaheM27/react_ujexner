import { Routes, Route } from "react-router-dom";
import Layout from "../Lesson17/Layout/Layout";
import { Home, Register2, Completed, Registration, User } from "./pages/index";
import ROUTES from "./routes";
import "./App.scss";

const App = () => {
  return (
    <>
      <Routes>
        <Route path={ROUTES.HOME} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={ROUTES.USER} element={<User />} />
          <Route path={ROUTES.REGISTRATION} element={<Registration />} />
          <Route path={ROUTES.REGISTER} element={<Register2 />} />
          <Route path={ROUTES.COMPLETED} element={<Completed />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
