import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { Home, NotFound, Category } from "./pages/index";
import Layout from "../Lesson14/Layout/Layout";
import ROUTES from "./Routes";

import "./App.scss";

const App = () => {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => {
        setData(res.products);
        setCategories([
          ...new Set(res.products.map((product) => product.category)),
        ]);
      });
  }, []);

  categories.map((category) => {
    ROUTES[category.toUpperCase()] = category;
    ROUTES[`${category.toUpperCase()}ID`] = `${category}/:id`;
  });

  return (
    <div>
      <Routes>
        <Route path={ROUTES.HOME} element={<Layout categories={categories} />}>
          <Route index element={<Home />} />
          {categories.map((category) => (
            <Route
              key={category}
              path={ROUTES[category.toUpperCase()]}
              element={<Category categories={categories} data={data} />}
            />
          ))}
          <Route path={ROUTES.NOTFOUND} element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
