import React from "react";

function ToDoItem(props) {
  return props.items.map((todoItem) => <li>{todoItem}</li>);
}

export default ToDoItem;
