import { Route, Routes } from "react-router-dom";
import { Home, Product, Products, User, Users } from "./pages";
import Layout from "./Layout/Layout";
import NotFound from "./pages/NotFound/NotFound";

import "./App.css";

const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" element={<User />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
