import { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import ContinentSection from "./components/ContinentSection/ContinentSection";
import { countries } from "./constants/data";

import "./App.scss";

const App = () => {
  const [selectedRegion, setSelectedRegion] = useState(null);

  return (
    <div>
      <NavBar onRegionSelect={setSelectedRegion} />
      {selectedRegion ? (
        <ContinentSection selectedRegion={selectedRegion} />
      ) : (
        <div className="container backgroundContainer">
          {countries.map((country) => {
            return (
              <img
                src={country.flags.svg}
                alt={country.name}
                key={country.population}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default App;
