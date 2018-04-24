import React from "react";
import DeleteToDoButton from "./DeleteToDoButton";
import CheckableToDo from "./CheckableToDo";
import EditableToDo from "./EditableToDo";
import EditToDoButton from "./EditToDoButton";

const ToDoListElement = ({ todo, edit }) => {
  if (edit) {
    return (
        <li key={todo.id}>
          <EditableToDo todo={todo} />
          <DeleteToDoButton todo={todo} />
        </li>
    );
  } else {
    return (
        <li key={todo.id}>
          <CheckableToDo todo={todo} />
          <EditToDoButton todo={todo} />
          <DeleteToDoButton todo={todo} />
        </li>
    );
  }
};

export default ToDoListElement;
