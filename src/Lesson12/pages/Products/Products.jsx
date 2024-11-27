import { useEffect, useState } from "react";
import Dashboard from "../../components/Dashboard/Dashboard";
import TableHead from "../../components/TableHead/TableHead";

import "./Products.scss";

export const Products = () => {
  const [products, setProducts] = useState([]);
  const [sortVar, setSortVar] = useState(false);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => setProducts(res.products));
  }, []);

  const sortArrByTitle = () => {
    const sortedByTitle = products.toSorted((a, b) => {
      if (sortVar === false) {
        return a.title.localeCompare(b.title);
      } else {
        return b.title.localeCompare(a.title);
      }
    });
    setSortVar(!sortVar);
    setProducts(sortedByTitle);
  };

  const sortArrByNum = () => {
    const sortedByNum = products.toSorted((a, b) => {
      return sortVar === false ? a.price - b.price : b.price - a.price;
    });
    setSortVar(!sortVar);
    setProducts(sortedByNum);
  };

  return (
    <div className="data">
      <div className="header">
        <TableHead
          title="Title"
          num="Price"
          info="Description"
          sortByTitle={sortArrByTitle}
          sortByNum={sortArrByNum}
        />
      </div>
      <div className="dashboard">
        {products.map((item) => {
          return (
            <Dashboard
              key={item.id}
              id={item.id}
              name={item.title}
              image={item.images[0]}
              number={item.price}
              someDetail={item.description}
            />
          );
        })}
      </div>
    </div>
  );
};
