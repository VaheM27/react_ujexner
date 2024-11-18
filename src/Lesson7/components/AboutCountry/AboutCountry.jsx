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

  const countryInfo = [
    { label: "Capital", value: capital },
    { label: "Region", value: `${region}, ${continent}` },
    { label: "Languages", value: languageList },
    { label: "Nationality", value: nationality },
    { label: "Population", value: population },
    { label: "Area", value: `${area} km²` },
    { label: "Population per km²", value: popkm },
    { label: "Currencies", value: `${symbol}, ${currency}` },
    { label: "Timezones", value: timezones },
    { label: "Border countries", value: border },
  ];

  return (
    <div className="aboutCountry">
      <div className="countryFlag">
        <img src={flag} alt={alt} />
        <img src={coatOfArms} alt={name} />
      </div>
      <div>
        <h3>{name}</h3>
        {countryInfo.map(({ label, value }) => (
          <p key={label}>
            {label}: <span>{value}</span>
          </p>
        ))}
        <a href={maps} target="_blank" rel="noreferrer">
          Google Maps
        </a>
      </div>
    </div>
  );
};

export default AboutCountry;
