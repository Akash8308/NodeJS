import React from "react";

function App() {
  const [headingText, setHeadingText] = React.useState("Hello");
  const [isMouseOver, setMouseOver] = React.useState(false);
  const [isMouseOut, setMouseOut] = React.useState(true);

  function handleClick() {
    setHeadingText("Submitted");
  }

  function handleMouseOver(myVal) {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  function handleTextChange(event) {
    setHeadingText("Hello " + event.target.value);
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input
        type="text"
        placeholder="What's your name?"
        onChange={handleTextChange}
      />
      <button
        style={{ backgroundColor: isMouseOver ? "Black" : " White" }}
        onClick={handleClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
