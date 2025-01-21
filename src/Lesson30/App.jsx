import { Route, Routes } from "react-router-dom";
import { ROUTES } from "./routes";
import { Home, Product } from "./pages";

const App = () => {
  return (
    <Routes>
      <Route element={<Home />} path={ROUTES.HOME} />
      <Route element={<Product />} path={ROUTES.PRODUCT} />
    </Routes>
  );
};

export default App;
