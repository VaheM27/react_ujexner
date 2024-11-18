import { useState, useMemo } from "react";
import NavBar from "./components/NavBar/NavBar";
import ContinentSection from "./components/ContinentSection/ContinentSection";
import { countries } from "./constants/data";

import "./App.scss";

const App = () => {
  const [selectedRegion, setSelectedRegion] = useState(null);

  const backgroundFlags = useMemo(
    () =>
      countries.map((country) => (
        <img
          src={country.flags.svg}
          alt={country.name}
          key={country.cca3} 
        />
      )),
    []
  ); 

  return (
    <div>
      <NavBar onRegionSelect={setSelectedRegion} />
      {selectedRegion ? (
        <ContinentSection selectedRegion={selectedRegion} />
      ) : (
        <div className="container backgroundContainer">{backgroundFlags}</div>
      )}
    </div>
  );
};

export default App;
