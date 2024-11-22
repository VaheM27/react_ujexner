import { useState } from "react";
import { nanoid } from "nanoid";
import DataCreate from "./components/DataCreate/DataCreate";
import DataBody from "./components/DataBody/DataBody";

import "./App.scss";

function App() {
  const [data, setData] = useState([]);

  const [sort, setSort] = useState(1);
  const sortData = (name) => {
    switch (name) {
      case "NAME":
        const sortDataByName = data.toSorted((a, b) =>
          sort === 1
            ? a.name.localeCompare(b.name)
            : b.name.localeCompare(a.name)
        );
        setSort(sort === 1 ? -1 : 1);
        setData(sortDataByName);
        break;
      case "ID":
        const sortDataByID = data.toSorted((a, b) =>
          sort === 1 ? a.id.localeCompare(b.id) : b.id.localeCompare(a.id)
        );
        setSort(sort === 1 ? -1 : 1);
        setData(sortDataByID);
      default:
        break;
    }
  };

  const dataInput = (e) => {
    e.preventDefault();
    const { name, email, userName, password } = e.target;
    setData(
      [
        ...data,
        name.value.length < 2
          ? alert("Error: Short name")
          : {
              id: nanoid(4),
              name: name.value,
              email: email.value,
              userName: userName.value,
              password: password.value,
            },
      ],

      e.target.reset()
    );
  };

  return (
    <div>
      <DataCreate dataInput={dataInput} />
      <DataBody data={data} sortData={sortData} />
    </div>
  );
}

export default App;
