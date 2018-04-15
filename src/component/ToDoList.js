import React, { Component } from 'react';
import ToDoListElement from './ToDoListElement';
import store from '../store';

class ToDoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: store.getState()
    };

    store.subscribe(() => this.setState({todos: store.getState()}))
  }

  render() {
    return (
      <ul>
        { this.state.todos.map(todo => <ToDoListElement key={todo.id} todo={todo}/>) }
      </ul>
    );
  }
}

export default ToDoList;
