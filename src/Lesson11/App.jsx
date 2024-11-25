import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Body from "./components/Body/Body";
import "./App.scss";

const App = () => {
  const [path, setPath] = useState("");
  const [data, setData] = useState([]);
  const [link, setLink] = useState("");

  useEffect(() => {
    if (link !== "") {
      switch (link) {
        case "https://dummyjson.com/":
          fetch(`https://dummyjson.com/${path}`)
            .then((res) => res.json())
            .then((res) => setData(res[path]));
          break;
        case "https://jsonplaceholder.typicode.com/":
          fetch(`https://jsonplaceholder.typicode.com/${path}`)
            .then((res) => res.json())
            .then((res) => setData(res));
          break;
        case "https://www.freetestapi.com/api/v1/":
          fetch(`https://www.freetestapi.com/api/v1/${path}`)
            .then((res) => res.json())
            .then((res) => setData(res));
          break;
        default:
          break;
      }
    }
  }, [path]);

  return (
    <div className="app">
      <Navbar slug={setPath} url={setLink} />
      <Body arr={data} />
    </div>
  );
};

export default App;
