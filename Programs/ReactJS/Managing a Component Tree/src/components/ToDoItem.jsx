import React from "react";

function ToDoItem(props) {
  const [decoration, setTextDecoration] = React.useState(false);

  function handleOnClickToDoItem() {
    setTextDecoration(!decoration);
  }

  return (
    <li
      onClick={handleOnClickToDoItem}
      style={{ textDecoration: decoration ? "line-through" : "none" }}
    >
      {props.item}
    </li>
  );
}

export default ToDoItem;
