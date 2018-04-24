import React from "react";
import ToDoListElement from "./ToDoListElement";

const ToDoList = ({ todos }) => {
  return (
    <ul>{todos.map(todo => <ToDoListElement key={todo.id} todo={todo} />)}</ul>
  );
};

export default ToDoList;
