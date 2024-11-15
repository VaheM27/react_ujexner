import "./AboutCountry.scss";

const AboutCountry = ({
  name,
  capital,
  region,
  continent,
  languages,
  nationality,
  population,
  symbol,
  currency,
  flag,
  coatOfArms,
  maps,
  timezones,
  area,
  border,
  alt,
  popkm,
}) => {
  const languageList = languages ? Object.values(languages).join(", ") : "N/A";

  return (
    <div className="aboutCountry">
      <div>
        <h3>{name}</h3>
        <p>
          Capital: <span>{capital}</span>
        </p>
        <p>
          Region:{" "}
          <span>
            {region}, {continent}
          </span>
        </p>
        <p>
          Languages: <span>{languageList}</span>
        </p>
        <p>
          Nationality: <span>{nationality}</span>
        </p>
        <p>
          Population: <span>{population}</span>
        </p>
        <p>
          Area: <span>{area} km²</span>
        </p>
        <p>
          Population per km²: <span>{popkm}</span>
        </p>
        <p>
          Currencies:{" "}
          <span>
            {symbol}, {currency}
          </span>
        </p>
        <p>
          Timezones: <span>{timezones}</span>
        </p>{" "}
        <p>
          Border countries: <span>{border}</span>
        </p>
        <a href={maps} target="_blank" rel="noreferrer">
          Google Maps
        </a>
      </div>
      <div>
        <img src={flag} alt={alt} />
        <img src={coatOfArms} alt={name} />
      </div>
    </div>
  );
};

export default AboutCountry;
