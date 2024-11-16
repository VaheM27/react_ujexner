import Dashboard from "../Dashboard/Dashboard";
import { useState } from "react";
import {
  mensClothes,
  womensClothes,
  electronics,
  jewelery,
} from "../../constants/data";

import "./Navbar.scss";

const Navbar = () => {
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

  return (
    <div className="navBarMain">
      <ul className="navList">
        {navItems.map((elm, i) => {
          return (
            <li key={i} className="navLi">
              <button className="navBtn" onClick={() => getData(elm)}>
                {elm}
              </button>
            </li>
          );
        })}
      </ul>
      <div className="dashboardContent">
        <Dashboard arr={productType} />
      </div>
    </div>
  );
};

export default Navbar;
