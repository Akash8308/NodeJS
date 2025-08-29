import React from "react";
import customStyle from "./customeStyles";

const currentTime = new Date().getHours();

function Greeting() {
  let greeting;
  if (currentTime < 12) {
    greeting = "Good Morning";
    customStyle.color = "red";
  } else if (currentTime < 18) {
    greeting = "Good Afternoon";
    customStyle.color = "green";
  } else {
    greeting = "Good Night";
    customStyle.color = "blue";
  }
  return greeting;
}

export default Greeting;
