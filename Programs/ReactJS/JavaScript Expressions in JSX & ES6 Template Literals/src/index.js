import React from "react";
import ReactDOM from "react-dom";

const fName = "Akash";
const LName = "Hedau";
const num = 8;

ReactDOM.render(
  <div>
    option 1:
    <h1>
      Hello {fName} {LName}!
    </h1>
    option 2:
    <h1>Hello {fName + " " + LName}!</h1>
    option 3:
    <h1>Hello {`${fName} ${LName}`}</h1>
    Hello {fName} {LName}!<p>Your lucky number is: {num}</p>
    <p>Your today's lucky number is: {Math.floor(Math.random() * 10)}</p>
  </div>,
  document.getElementById("root")
);
