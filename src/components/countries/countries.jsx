import { useEffect } from "react";
import { useState } from "react";
import Country from "../country/country";
import "./countries.css";

export default function Countries() {
  const [countries, setCountries] = useState([]);                             
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleVisitedCountry = (country) => {
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };

  const handleVisitedFlags = (flag) => {
    const newVisitedFlags = [...visitedFlags, flag];
    setVisitedFlags(newVisitedFlags);
  };

  return (
    <div>
      <h4>Visited Countries: {visitedCountries.length}</h4>
      {/* visited country list */}
      <ul>
        {visitedCountries.map((country) => (
          <li key={country.cca3}>{country.common}</li>
        ))}
      </ul>
      <h4>Visited Flags: </h4>
      <div>
        {/* Visited Flags List */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5,1fr)",
            border: "2px solid skyblue",
            padding: "10px",
            marginBottom: "10px",
            gap: "10px",
            borderRadius: "20px",
            backgroundColor: "hsl(210, 100%, 15%)",
          }}
        >
          {visitedFlags.map((flag) => (
            <img
              key={flag.cca2}
              src={flag.image}
              alt={flag.name}
              height={"100px"}
              width={"200px"}
              style={{
                border: "2px solid white",
                padding: "5px",
                margin: "10px",
              }}
            />
          ))}
        </div>
      </div>
      <div className="countries">
        {countries.map((country) => (
          <Country
            key={country.cca3}
            common={country.name.common}
            image={country.flags.png}
            population={country.population}
            area={country.area}
            cca3={country.cca3}
            handleVisitedCountry={handleVisitedCountry}
            handleVisitedFlags={handleVisitedFlags}
          />
        ))}
      </div>
    </div>
  );
}
