import { Routes, Route } from "react-router-dom";
import { useState, useEffect, Fragment } from "react";
import { Home, NotFound, Category, Product } from "./pages/index";
import Layout from "../Lesson14/Layout/Layout";
import ROUTES from "./Routes";

import "./App.scss";

const App = () => {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState(null);
  const [categoryData, setCategoryData] = useState([]);

  const selectCategory = (category) => setCategory(category);

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

  useEffect(() => {
    setCategoryData(
      category && data ? data.filter((item) => item.category === category) : []
    );
  }, [category, data]);

  categories.map((category) => {
    ROUTES[category.toUpperCase()] = category;
    ROUTES[`${category.toUpperCase()}ID`] = `${category}/:id`;
  });

  return (
    <div>
      <Routes>
        <Route
          path={ROUTES.HOME}
          element={
            <Layout categories={categories} selectCategory={selectCategory} />
          }>
          <Route index element={<Home />} />
          {categories.map((category, id) => (
            <Fragment key={category}>
              <Route
                path={ROUTES[category.toUpperCase()]}
                element={
                  <Category categoryData={categoryData} category={category} />
                }
              />
              <Route
                path={ROUTES[`${category.toUpperCase()}ID`]}
                element={
                  <Product categoryData={categoryData} category={category} />
                }
              />
            </Fragment>
          ))}
          <Route path={ROUTES.NOTFOUND} element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
