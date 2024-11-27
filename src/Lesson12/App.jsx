import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import { Home, NotFound, Users, Products, Recipes } from "./pages";
import { Routes, Route } from "react-router-dom";
import ROUTES from "./Routes";

import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Nav />
      <Routes>
        <Route path={ROUTES.HOME}>
          <Route index element={<Home />} />
          <Route path={ROUTES.USERS} element={<Users />} />
          <Route path={ROUTES.PRODUCTS} element={<Products />} />
          <Route path={ROUTES.RECIPES} element={<Recipes />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
