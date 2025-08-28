import React from "react";
import ReactDOM from "react-dom";

const customeStyle = {
  color: "red",
  fontSize: "20px",
};

ReactDOM.render(
  <h1 style={customeStyle}>Hello World!</h1>,
  document.getElementById("root")
);
