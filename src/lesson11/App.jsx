import { useEffect, useState } from "react";
import Nav from "./components/Nav/Nav";
import Body from "./components/Body/Body";

import "./App.css";

const App = () => {
  const [path, setpath] = useState("");
  const [data, setdata] = useState([]);
  useEffect(() => {
    if (path !== "") {
      fetch(`https://dummyjson.com/${path}`)
        .then((res) => res.json())
        .then((data) => setdata(data[path]));
    }
  }, [path]);

  return (
    <div>
      <Nav setpath={setpath} />
      <Body data={data} />
    </div>
  );
};

export default App;
