import React from "react";
import "./Country.css";

function Country({ country, order }) {
  const formatter = new Intl.NumberFormat("en-CA");
  return (
    <div className={"country animation-" + order}>
      <img
        src={country["flagUrl"]}
        alt={country["name"]}
        className="country__flag-url"
      />
      <h4 className="country__name">{country["name"]}</h4>
      <p className="country__capital">Capital: {country["capital"]}</p>
      <p className="country__population">
        Population: {formatter.format(country["population"])}
      </p>
    </div>
  );
}

export default Country;
