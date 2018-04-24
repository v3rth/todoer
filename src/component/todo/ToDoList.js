import React from "react";
import ToDoListElementContainer from "./ToDoListElementContainer";

const ToDoList = ({ todos }) => {
  return (
    <ul>{todos.map(todo => <ToDoListElementContainer key={todo.id} todo={todo} />)}</ul>
  );
};

export default ToDoList;
