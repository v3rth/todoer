import React from "react";
import DeleteToDoButton from "./DeleteToDoButton";
import CheckableToDo from "./CheckableToDo";
import EditableToDo from "./EditableToDo";
import EditToDoButton from "./EditToDoButton";
import {ListItem, ListItemText} from "rmwc";

const ToDoListElement = ({ todo, edit }) => {
  if (edit) {
    return (
        <ListItem key={todo.id}>
          <ListItemText>
            <EditableToDo todo={todo} />
          </ListItemText>
          <DeleteToDoButton todo={todo} />
        </ListItem>
    );
  } else {
    return (
        <ListItem key={todo.id}>
          <EditToDoButton todo={todo} />
          <ListItemText><CheckableToDo todo={todo} /></ListItemText>
          <DeleteToDoButton todo={todo} />
        </ListItem>
    );
  }
};

export default ToDoListElement;
