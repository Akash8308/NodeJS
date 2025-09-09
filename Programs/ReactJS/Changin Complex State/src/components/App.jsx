import React from "react";

function App() {
  const [fullName, setFullName] = React.useState({
    fname: "",
    lName: "",
  });

  function handleChange(event) {
    const newValue = event.target.value;

    if (event.target.name === "fName") {
      setFullName((prevValue) => {
        return { fname: newValue, lName: prevValue.lName };
      });
    } else if (event.target.name === "lName") {
      setFullName((prevValue) => {
        return { fname: prevValue.fname, lName: newValue };
      });
    }
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fname} {fullName.lName}
      </h1>
      <form>
        <input name="fName" placeholder="First Name" onChange={handleChange} />
        <input name="lName" placeholder="Last Name" onChange={handleChange} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
