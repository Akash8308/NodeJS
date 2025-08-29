import React from "react";
import customStyle from "./customeStyles";
import Greeting from "./Greeting";
import "./../../public/styles.css";

function App() {
  return (
    <div>
      <h1 className="heading" style={customStyle}>
        <Greeting />
      </h1>
    </div>
  );
}

export default App;
