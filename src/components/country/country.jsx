import { useState } from "react";
import "./country.css";
import PropTypes from "prop-types";

export default function Country({
  common,
  image,
  population,
  area,
  cca2,
  cca3,
  handleVisitedCountry,
  handleVisitedFlags,
}) {
  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    setVisited(!visited);
  };

  return (
    <div
      className={`country ${visited ? "visited" : ""}`}
      style={{ marginRight: "auto", marginLeft: "auto", width: "400px" }}
    >
      <img
        src={image}
        alt="Country Flag"
        style={{
          display: "block",
          margin: "0 auto",
          height: "200px",
          width: "300px",
        }}
      />

      <h3
        style={{
          color: visited ? "brown" : "black",
          fontSize: visited && "30px",
        }}
      >
        {common}
      </h3>

      <h4>Population: {population}</h4>
      <h4>Area: {area}</h4>
      <p>
        <small>Code: {cca3}</small>
      </p>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <button onClick={handleVisited}>
          {visited ? "Visited" : "Pending"}
        </button>
        <button
          onClick={() => {
            handleVisitedCountry({ common, population, cca3 });
          }}
        >
          Mark as visited
        </button>
        <button
          onClick={() => {
            handleVisitedFlags({ common, cca2, population, cca3, image });
          }}
        >
          Visited Flags
        </button>
      </div>
      <br />
      {visited
        ? "This country has already been visited"
        : "I want to visit this country"}
    </div>
  );
}

Country.propTypes = {
  common: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  population: PropTypes.number.isRequired,
  area: PropTypes.number.isRequired,
  cca3: PropTypes.string.isRequired,
  cca2: PropTypes.string.isRequired,
  handleVisitedCountry: PropTypes.func.isRequired,
  handleVisitedFlags: PropTypes.func.isRequired,
};
