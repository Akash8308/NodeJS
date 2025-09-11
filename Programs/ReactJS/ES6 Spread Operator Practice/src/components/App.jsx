import React from "react";

function App() {
  const [todoList, setTodoList] = React.useState([]);
  const [input, setInput] = React.useState("");

  function handleInputChange(event) {
    setInput(event.target.value);
  }

  function handleAddClick() {
    if (input.trim() !== "") {
      setTodoList((prevValue) => [...prevValue, input]);
      setInput("");
    }
  }

  function getList() {
    return (
      <ul>
        {todoList.map((element, index) => (
          <li key={index}>{element}</li>
        ))}
      </ul>
    );
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleInputChange} />
        <button onClick={handleAddClick}>
          <span>Add</span>
        </button>
      </div>
      <div>{getList()}</div>
    </div>
  );
}

export default App;
