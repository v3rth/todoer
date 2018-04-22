import React from 'react';
import VisibilityFilter from "./VisibilityFilter";
import AddForm from "../common/AddForm";
import ToDoList from "./ToDoList";

const Todos = ({selectedList, todos, addToDo}) => {
  if (selectedList === null) {
    return (<div/>);
  }

  return (
      <div>
        <AddForm onSubmit={(name) => addToDo(selectedList, name)}/>
        <ToDoList todos={todos}/>

        <VisibilityFilter list="ALL">All</VisibilityFilter>
        <VisibilityFilter list="COMPLETED">Completed</VisibilityFilter>
        <VisibilityFilter list="UNCOMPLETED">Uncompleted</VisibilityFilter>
      </div>
  );
};

export default Todos;
