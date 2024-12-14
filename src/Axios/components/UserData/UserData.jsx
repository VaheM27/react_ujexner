import axios from "axios";
import { useEffect, useState } from "react";

const UserData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios("https://dummyjson.com/carts").then((res) => setData(res.data.carts));
  }, []);

  return (
    <div>
      {data?.map((item) => {
        return (
          <div key={item.id}>
            <h1>{item.id}</h1>
            <img src={item.thumbnail} alt="" />
            <p> {item.title} </p>
            <p> {item.price} </p>
            <p> {item.quantity} </p>
            <p> {item.total} </p>
            <p> {item.discountPercentage} </p>
            <p> {item.discountedTotal} </p>
          </div>
        );
      })}
    </div>
  );
};

export default UserData;
