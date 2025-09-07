import React from "react";

function App() {
  setInterval(getTime, 1000);

  var currTime = new Date().toLocaleTimeString();
  var [time, setTime] = React.useState(currTime);

  function getTime() {
    currTime = new Date().toLocaleTimeString();
    setTime(currTime);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
