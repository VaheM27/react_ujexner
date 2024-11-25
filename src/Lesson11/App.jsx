import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";

import "./App.scss";
import Body from "./components/Body/Body";
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

  console.log(data);

  return (
    <div>
      <Navbar changeUrl={changeUrl} />
      <Body dataName={dataName} data={data} />
    </div>
  );
};

export default App;
