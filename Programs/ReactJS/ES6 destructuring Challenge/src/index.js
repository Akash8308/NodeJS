// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import animals from "./data";
import cars from "./practice";

const [cat, dog] = animals;
// Here fluffy is def value
const { name = "fluffy", sound: catSound } = cat;
const { name: dogName, sound: dogSound } = dog;

const [honda, tesla] = cars;
const { topSpeed: teslaTopSpeed, teslaZeroToSixty } = tesla.speedStats;
const teslaTopColour = tesla.coloursByPopularity[0];
const { topSpeed: hondaTopSpeed, hindaZeroToSixty } = honda.speedStats;
const hondaTopColour = honda.coloursByPopularity[0];

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
      <th>Top Colour</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
