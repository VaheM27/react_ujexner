import { useEffect, useState } from "react";

export const UseEffectHomeWork = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://673b06ff339a4ce4451a38cf.mockapi.io/users")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const DeleteDiv = (id) => {
    setData(data.filter((elm) => elm.id !== id));
  };

  const sortData = () => {
    setData(data.toSorted((a, b) => (a.name > b.name ? 1 : -1)));
  };

  return (
    <div className="main_div">
      <h1>Datas</h1>
      <button onClick={sortData}>Sort A-Z </button>
      {data?.map((elm) => {
        return (
          <div
            className="box"
            style={{ backgroundColor: elm.color }}
            key={elm.id}
          >
            <p>Person ID : {elm.id}</p>
            <p>Created At : {elm.createdAt}</p>
            <p>Name : {elm.name}</p>
            <p>City : {elm.city}</p>
            <img src={elm.city_photo} alt="" />
            <button onClick={() => DeleteDiv(elm.id)}>Delete Data</button>
          </div>
        );
      })}
    </div>
  );
};
