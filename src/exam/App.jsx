import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ROUTES } from "./Routes";
import { Forcast, Home } from "./pages";
import SearchBar from "./components/SearchBar/SearchBar";
import "../App.css";

const App = () => {
  const [type, setType] = useState("celsius");

  return (
    <div className="app">
      <SearchBar tempTypeSetter={setType} />
      <Routes>
        <Route path={ROUTES.HOME} element={<Home type={type} />} />
        <Route path={ROUTES.FORCAST} element={<Forcast type={type} />} />
      </Routes>
    </div>
  );
};

export default App;
