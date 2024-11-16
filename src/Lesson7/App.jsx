import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./components/Dashboard/Dashboard";
import { useState } from "react";
import {
  mensClothes,
  womensClothes,
  electronics,
  jewelery,
} from "./constants/data";

import "./App.scss";

function App() {
  const [productType, setProductType] = useState([]);
  const navItems = ["Men Clothes", "Women Clothes", "Electronics", "Jewelery"];

  function getData(value) {
    switch (value) {
      case "Men Clothes":
        setProductType([...mensClothes]);
        break;
      case "Women Clothes":
        setProductType([...womensClothes]);
        break;
      case "Electronics":
        setProductType([...electronics]);
        break;
      case "Jewelery":
        setProductType([...jewelery]);
        break;
      default:
        break;
    }
  }

  function changeOrder() {
    const sortedArr = productType.toSorted((a, b) =>
      a.title > b.title ? 1 : a.title < b.title ? -1 : 0
    );
    setProductType(sortedArr);
  }

  return (
    <div>
      <Navbar navItems={navItems} getData={getData} />
      <div className="dashboardContent">
        <Dashboard arr={productType} changeOrder={changeOrder} />
      </div>
    </div>
  );
}

export default App;
