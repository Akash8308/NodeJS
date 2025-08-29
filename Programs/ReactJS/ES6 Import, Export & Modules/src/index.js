import React from "react";
import ReactDOM from "react-dom";
import pi, { doublePi, triplePi } from "./math";

ReactDOM.render(
  <ul>
    <li>Value of pi: {pi}</li>
    <li>Value of Double Pi: {doublePi()}</li>
    <li>Value of Triple Pi: {triplePi}</li>
  </ul>,
  document.getElementById("root")
);
