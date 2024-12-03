import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';  
import Users from './pages/Users/Users';  
import Products from './pages/Products/Products'

import "./App.css"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Users />} />
        <Route path="/products" element={<Products />} />
      </Route>
    </Routes>
  );
};

export default App;
