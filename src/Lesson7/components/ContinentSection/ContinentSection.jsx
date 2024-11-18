import { useState, useEffect, useMemo } from "react";
import { countries } from "../../constants/data";
import AboutCountry from "../AboutCountry/AboutCountry";

import "./ContinentSection.scss";

const ContinentSection = ({ selectedRegion }) => {
  const [sort, setSort] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [isViewingCountry, setIsViewingCountry] = useState(false);

  const filteredCountries = useMemo(() => 
    countries.filter(country => country.region === selectedRegion),
    [selectedRegion]
  );

  const sortedCountries = useMemo(() =>
    sort ? [...filteredCountries].sort((a, b) => 
      a.name.common.localeCompare(b.name.common)
    ) : filteredCountries,
    [filteredCountries, sort]
  );

  const handleCountryClick = (country) => {
    setSelectedCountry(country);
    setIsViewingCountry(true);
  };

  const sortFunction = () => setSort(prev => !prev);

  const bordercountries = useMemo(() => (borderCodes) => {
    if (!borderCodes?.length) return ["Has no bordered countries"];
    
    return borderCodes
      .map(code => {
        const borderedCountry = countries.find(country => country.cca3 === code);
        return borderedCountry?.name.common;
      })
      .filter(Boolean)
      .join(", ");
  }, []);

  const goBackToList = () => {
    setIsViewingCountry(false);
    setSelectedCountry(null);
  };

  useEffect(() => {
    setIsViewingCountry(false);
    setSelectedCountry(null);
  }, [selectedRegion]);

  const countryDetails = useMemo(() => {
    if (!selectedCountry) return null;
    
    const currencies = selectedCountry.currencies?.[Object.keys(selectedCountry.currencies)[0]];
    
    return {
      name: selectedCountry.name.official,
      capital: selectedCountry.capital,
      region: selectedCountry.subregion,
      continent: selectedCountry.continents,
      languages: selectedCountry.languages || "N/A",
      nationality: selectedCountry.demonyms?.eng?.m || "N/A",
      population: selectedCountry.population,
      symbol: currencies?.symbol || "N/A",
      currency: currencies?.name || "N/A",
      flag: selectedCountry.flags.png,
      coatOfArms: selectedCountry.coatOfArms.png,
      maps: selectedCountry.maps.googleMaps,
      area: selectedCountry.area,
      timezones: selectedCountry.timezones.length === 1 
        ? selectedCountry.timezones[0] 
        : selectedCountry.timezones.join(", "),
      border: bordercountries(selectedCountry.borders),
      alt: selectedCountry.flags.alt,
      popkm: `${Math.round(selectedCountry.population / selectedCountry.area)} p/km²`
    };
  }, [selectedCountry, bordercountries]);

  return (
    <section className="continent-section">
      <div className="container sec-container">
        {isViewingCountry && selectedCountry ? (
          <div className="country-details">
            <div>
              <button className="backBtn" onClick={goBackToList}>
                Back to Country List
              </button>
            </div>
            <AboutCountry {...countryDetails} />
          </div>
        ) : (
          <div className="countryList">
            {selectedRegion ? (
              <>
                <h2>Countries in {selectedRegion}</h2>
                <button className="sortBtn" onClick={sortFunction}>
                  {!sort ? "Sort A - Z" : "Unsort"}
                </button>
                <ul>
                  {sortedCountries.map((country, id) => (
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
        )}
      </div>
    </section>
  );
};

export default ContinentSection;
