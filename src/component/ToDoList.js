import React, { Component } from 'react';
import ToDoListElement from './ToDoListElement';
import VisibilityFilter from "./VisibilityFilter";
import AddToDo from "./AddToDo";
import PropTypes from 'prop-types';

class ToDoList extends Component {
  static contextTypes = {
    store: PropTypes.object
  };

  constructor(props, {store}) {
    super(props);

    this.state = store.getState();
    store.subscribe(() => this.setState(store.getState()))
  }

  filter(todo) {
    switch(this.state.visibility) {
      case 'COMPLETED':
        return todo.isCompleted;
      case 'UNCOMPLETED':
        return !todo.isCompleted;
      default:
        return true
    }
  }

  render() {
    return (
      <div>
        <AddToDo/>
        <ul>
          { this.state.todos.filter(this.filter.bind(this)).map(todo => <ToDoListElement key={todo.id} todo={todo}/>) }
        </ul>

        <VisibilityFilter list="ALL">All</VisibilityFilter>
        <VisibilityFilter list="COMPLETED">Completed</VisibilityFilter>
        <VisibilityFilter list="UNCOMPLETED">Uncompleted</VisibilityFilter>
      </div>

    );
  }
}

export default ToDoList;
