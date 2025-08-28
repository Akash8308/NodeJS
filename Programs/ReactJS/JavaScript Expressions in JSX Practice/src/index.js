//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.

import React from "react";
import ReactDOM from "react-dom";

const createrFName = "Akash";
const createrLName = "Hedau";

// Either store it and use OR directly write in render
const CopyrightYear = new Date().getFullYear();

ReactDOM.render(
  <div>
    <p>Created by {createrFName + " " + createrLName}</p>
    <p>Copyright {new Date().getFullYear()}</p>
  </div>,
  document.getElementById("root")
);
