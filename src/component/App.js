import React, { Component } from 'react';
import ToDoList from "./ToDoList";
import AddToDo from "./AddToDo";

class App extends Component {
  render() {
    return (
      <div>
        <AddToDo/>
        <ToDoList/>
      </div>
    );
  }
}

export default App;
