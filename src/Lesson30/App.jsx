import { Route, Routes } from "react-router-dom";
import { ROUTES } from "./routes";
import { Home, Product } from "./pages";

import styles from "./App.module.scss";

const App = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.PRODUCT} element={<Product />} />
    </Routes>
  );
};

export default App;
