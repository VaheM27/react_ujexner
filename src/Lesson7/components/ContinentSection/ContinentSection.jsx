import { useState } from "react";
import { countries } from "../../constants/data";
import AboutCountry from "../AboutCountry/AboutCountry";
import "./ContinentSection.scss";

const ContinentSection = ({ selectedRegion }) => {
  const filteredCountries = countries.filter(
    (country) => country.region === selectedRegion
  );

  const sortCountries = () => {
    return [...filteredCountries].sort((a, b) =>
      a.name.common.localeCompare(b.name.common)
    );
  };

  const [sort, setSort] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const sortFunction = () => {
    setSort(!sort);
  };

  const countryArray = sort ? sortCountries() : filteredCountries;

  const handleCountryClick = (country) => {
    setSelectedCountry(country);
  };

  const bordercountries = (borderCodes) => {
    if (!borderCodes || borderCodes.length === 0) {
      return ["Has no bordered countries"];
    }

    return borderCodes
      .map((code) => {
        const borderedCountry = countries.find(
          (country) => country.cca3 === code
        );
        return borderedCountry ? borderedCountry.name.common + ", " : null;
      })
      .filter(Boolean);
  };

  return (
    <section className="continent-section">
      <div className="container sec-container">
        <div className="countryList">
          {selectedRegion ? (
            <>
              <h2>Countries in {selectedRegion}</h2>
              <button className="sortBtn" onClick={sortFunction}>
                {!sort ? "Sort A - Z" : "Unsort"}
              </button>
              <ul>
                {countryArray.map((country, id) => (
                  <li key={id}>
                    <button
                      className="countryBtn"
                      onClick={() => handleCountryClick(country)}>
                      <img
                        src={country.flags.png}
                        alt={`Flag of ${country.name.common}`}
                        height="40"
                        width="60"
                      />
                      <span>{country.name.common}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <p>Please select a region to see the countries.</p>
          )}
        </div>
        {selectedCountry && (
          <AboutCountry
            name={selectedCountry.name.official}
            capital={selectedCountry.capital}
            region={selectedCountry.subregion}
            continent={selectedCountry.continents}
            languages={selectedCountry.languages}
            nationality={selectedCountry.demonyms.eng.m}
            population={selectedCountry.population}
            symbol={
              selectedCountry.currencies?.[
                Object.keys(selectedCountry.currencies)[0]
              ]?.symbol || "N/A"
            }
            currency={
              selectedCountry.currencies?.[
                Object.keys(selectedCountry.currencies)[0]
              ]?.name || "N/A"
            }
            flag={selectedCountry.flags.png}
            coatOfArms={selectedCountry.coatOfArms.png}
            maps={selectedCountry.maps.googleMaps}
            area={selectedCountry.area}
            timezones={
              selectedCountry.timezones.length === 1
                ? selectedCountry.timezones[0]
                : selectedCountry.timezones.join(", ")
            }
            border={bordercountries(selectedCountry.borders)}
            alt={selectedCountry.flags.alt}
            popkm={
              Math.round(selectedCountry.population / selectedCountry.area) +
              " p/km²"
            }
          />
        )}
      </div>
    </section>
  );
};

export default ContinentSection;
