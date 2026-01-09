import React from "react";
import Country from "./Country";
import "./Countries.css";

function Countries({ state }) {
  return (
    <ul className="countries">
      {state.map((country, i) => {
        return (
          <li>
            <Country key={i} country={country} order={i} />
          </li>
        );
      })}
      {/* {console.log(state)} */}
    </ul>
  );
}

export default Countries;
