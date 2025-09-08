import React from "react";

function App() {
  var [userName, setUserName] = React.useState("");
  var [headingName, setHeadingName] = React.useState("");

  function handleSubmiClick() {
    setHeadingName(userName);
    event.preventDefault();
  }

  function handleTextChange(event) {
    setUserName(event.target.value);
  }

  return (
    <div className="container">
      <h1>Hello {headingName} </h1>
      <form onSubmit={handleSubmiClick}>
        <input
          type="text"
          placeholder="What's your name?"
          onChange={handleTextChange}
        />
        <button type="Submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
