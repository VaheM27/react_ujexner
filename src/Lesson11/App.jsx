import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Body from "./components/Body/Body";

import "./App.scss";

const App = () => {
  const [url, setUrl] = useState("");
  const [data, setData] = useState([]);
  const [dataName, setDataName] = useState([]);

  useEffect(() => {
    if (url !== "") {
      fetch(url)
        .then((res) => res.json())
        .then((res) => setData(res[dataName]));
    }
  }, [url]);

  const changeUrl = (nextUrl, newName) => {
    setUrl(nextUrl);
    setDataName(newName);
  };

  return (
    <div>
      <Navbar changeUrl={changeUrl} />
      <div className="container">
        <Body dataName={dataName} data={data} />
      </div>
    </div>
  );
};

export default App;
