import React from "react";
import {List} from "rmwc";
import ToDoListElement from "./ToDoListElement";

const ToDoList = ({ todos, editableToDo }) => {
  return (
    <List nonInteractive={true}>
      {todos.map(todo => <ToDoListElement key={todo.id} isEdit={todo.id === editableToDo} todo={todo} />)}
    </List>
  );
};

export default ToDoList;
