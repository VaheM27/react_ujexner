import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import { car, clothes, food } from "./constants/Data";
import { useState } from "react";

import "./App.css";

function App() {
  const [product, setProduct] = useState([]);
  const nav = ["Car", "Clothes", "Food"];

  function data(val) {
    switch (val) {
      case "Car":
        setProduct(car);
        break;
      case "Clothes":
        setProduct(clothes);
        break;
      case "Food":
        setProduct(food);
        break;
      default:
        break;
    }
  }
  return (
    <div className="appMain">
      <Navbar nav={nav} data={data} />
      <Main arr={product} />
    </div>
  );
}
export default App;
