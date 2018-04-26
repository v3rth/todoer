import React from "react";
import ToDoListElementContainer from "./ToDoListElementContainer";
import {List} from "rmwc";

const ToDoList = ({ todos }) => {
  return (
    <List>
      {todos.map(todo => <ToDoListElementContainer key={todo.id} todo={todo} />)}
    </List>
  );
};

export default ToDoList;
