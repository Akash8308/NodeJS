//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

const customeGreetingStyle = {
  color: "",
};

function Greeting() {
  const time = new Date().getHours();
  var greetings = "";
  if (time >= 0 && time < 12) {
    greetings = "Good Morning";
    customeGreetingStyle.color = "red";
  } else if (time >= 12 && time < 18) {
    greetings = "Good Afternoon";
    customeGreetingStyle.color = "green";
  } else if (time >= 18 && time < 24) {
    greetings = "Good Evening";
    customeGreetingStyle.color = "blue";
  }

  return (
    <h1 className="heading" style={customeGreetingStyle}>
      {greetings}
    </h1>
  );
}

ReactDOM.render(
  <div>
    <Greeting />
  </div>,
  document.getElementById("root")
);
