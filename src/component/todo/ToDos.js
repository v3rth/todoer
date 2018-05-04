import React from "react";
import VisibilityFilter from "./VisibilityFilter";
import ToDoList from "./ToDoList";
import SearchBox from "./SearchBox";
import AddToDo from "./AddToDo";

const Todos = ({ editableToDo, selectedList, todos}) => {
  if (selectedList === null) {
    return <div />;
  }

  const addToDoForm = selectedList === 'ALL_TODOS' ? '' : <AddToDo selectedList={selectedList}/>;
  return (
    <div>
      <SearchBox/>
      <VisibilityFilter list="ALL">All</VisibilityFilter>
      <VisibilityFilter list="COMPLETED">Completed</VisibilityFilter>
      <VisibilityFilter list="UNCOMPLETED">Uncompleted</VisibilityFilter>

      <ToDoList editableToDo={editableToDo} todos={todos}/>

      {addToDoForm}

    </div>
  );
};

export default Todos;
