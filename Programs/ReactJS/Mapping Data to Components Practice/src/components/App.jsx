import React from "react";
import emojipedia from "../emojipedia";
import Dictionary from "./Disctionary";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <Dictionary emojipedia={emojipedia} />
    </div>
  );
}

export default App;
