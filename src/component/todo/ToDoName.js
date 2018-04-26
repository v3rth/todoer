import React from "react";

const ToDoName = ({ todo, toggleToDo }) => {
  let style = { textDecoration: todo.isCompleted ? "line-through" : "" };

  return (
    <span onClick={() => toggleToDo(todo)} style={style}>
      {todo.name}
    </span>
  );
};

export default ToDoName;