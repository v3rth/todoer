import React, { Component } from 'react';
import ToDoList from "./ToDoList";
import {Provider} from 'react-redux';
import store from "../store";

class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <ToDoList/>
        </Provider>
      </div>
    );
  }
}

export default App;
