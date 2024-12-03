import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import Users from './pages/Users/Users';
import Products from './pages/Products/Products';
import User from './pages/User/User'
import Product from './pages/Product/Product'

import './App.css';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Users />} />
        <Route path="users/:userId" element={<User />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:productId" element={<Product />} />
      </Route>
    </Routes>
  );
};

export default App;
