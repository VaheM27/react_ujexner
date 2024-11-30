import { Route, Routes } from "react-router-dom";
import { Home, Products, Details, NotFound } from "./pages/index";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import ROUTES from "./Routes";

import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Nav />
      <Routes>
        <Route path={ROUTES.HOME}>
          <Route index element={<Home />} />
          <Route path={ROUTES.PRODUCTS} element={<Products />} />
          <Route path={ROUTES.DETAILS} element={<Details />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
