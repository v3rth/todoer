import React, { Component } from 'react';
import ToDoList from "./list/ToDoList";
import {Provider} from 'react-redux';
import store from "../store";
import ListsList from "./list/ListsList";
import AddList from "./list/AddList";

class App extends Component {
  render() {
    return (
      <div>
        <AddList/>
        <ListsList/>
        <Provider store={store}>
          <ToDoList/>
        </Provider>
      </div>
    );
  }
}

export default App;
