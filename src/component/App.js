import React from 'react';
import VisibleToDoList from "./todo/VisibleToDoList";
import ListsContainer from "./todo/ListsContainer";

const App = () => {
  return (
    <div>
      <ListsContainer/>
      <VisibleToDoList/>
    </div>
  );
};

export default App;
