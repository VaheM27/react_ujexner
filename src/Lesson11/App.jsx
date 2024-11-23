import React, { useEffect, useState } from "react";
import Nav from "./components/Nav/Nav";
import Body from "./components/Body/Body";

import "./App.css";

const App = () => {
  const [path, setPath] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    if (path !== "") {
      fetch(`https://dummyjson.com/${path}`)
        .then((res) => res.json())
        .then((data) => setData(data[path]));
    }
  }, [path]);

  return (
    <div>
      <Nav setPath={setPath} />
      <Body data={data} />
    </div>
  );
};

export default App;
