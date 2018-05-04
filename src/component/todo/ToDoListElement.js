import React from "react";
import ToDoListElementEdit from "./ToDoListElementEdit";
import ToDoListElementCheck from "./ToDoListElementCheck";

export default ({ todo, isEdit }) => {
  return isEdit ? <ToDoListElementEdit todo={todo}/> : <ToDoListElementCheck todo={todo}/>
};
