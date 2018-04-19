import React, { Component } from 'react';
import ToDoList from "./ToDoList";
import ListsList from "./ListsList";
import AddList from "./AddList";

class App extends Component {
  render() {
    return (
      <div>
        <AddList/>
        <ListsList/>
        <ToDoList/>
      </div>
    );
  }
}

export default App;
