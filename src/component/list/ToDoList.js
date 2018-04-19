import React, { Component } from 'react';
import ToDoListElement from '../todo/ToDoListElement';
import VisibilityFilter from "../VisibilityFilter";
import AddToDo from "../todo/AddToDo";
import PropTypes from 'prop-types';
import _ from 'underscore';

function filterTodos(visibility) {
  return (todo) => {
    switch(visibility) {
      case 'COMPLETED':
        return todo.isCompleted;
      case 'UNCOMPLETED':
        return !todo.isCompleted;
      default:
        return true
    }
  }
}

function getToDos(lists, selectedListId) {
  const selected = _.find(lists, (list) => list.id === selectedListId);

  if (!selected) {
    return [];
  }

  return selected ? selected.todos : [];
}

function getFilter(state) {
  return getToDos(state.lists, state.selectedList).filter(filterTodos(state.visibility));
}

class ToDoList extends Component {
  static contextTypes = {
    store: PropTypes.object
  };

  constructor(props, {store}) {
    super(props);

    this.state = store.getState();
    store.subscribe(() => this.setState(store.getState()))
  }

  render() {
    return (
      <div>
        <AddToDo/>
        <ul>
          { getFilter(this.state).map(todo => <ToDoListElement key={todo.id} todo={todo}/>) }
        </ul>

        <VisibilityFilter list="ALL">All</VisibilityFilter>
        <VisibilityFilter list="COMPLETED">Completed</VisibilityFilter>
        <VisibilityFilter list="UNCOMPLETED">Uncompleted</VisibilityFilter>
      </div>

    );
  }
}

export default ToDoList;
