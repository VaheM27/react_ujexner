import { Routes, Route } from "react-router-dom";
import ROUTES from "./Routes";
import { useState, useEffect } from "react";
import { Home, NotFound, Patients } from "./pages";
import Nav from "./components/Nav/Nav";

import "./App.scss";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fedskillstest.coalitiontechnologies.workers.dev/", {
          method: "GET",
          headers: {
            Authorization: "Basic " + btoa("coalition:skills-test"),
          },
        });
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    data.map((user) => (user.id = Math.random()));
    console.log(data);
  }, [data]);

  return (
    <div className="App">
      <Nav />
      <Routes path={ROUTES.HOME}>
        <Route index element={<Home />}></Route>
        <Route
          path={ROUTES.PATIENTS}
          element={<Patients data={data} />}></Route>
        <Route path={ROUTES.NOTFOUND} element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
