import React from 'react';
import DeleteToDoButton from "./DeleteToDoButton";
import CheckableToDo from "./CheckableToDo";

const ToDoListElement = ({todo}) => {
  return (
      <li key={todo.id}>
        <CheckableToDo todo={todo}/>
        <DeleteToDoButton todo={todo}/>
      </li>
  );
};

export default ToDoListElement;
