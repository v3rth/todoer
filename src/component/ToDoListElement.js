import React, { Component } from 'react';
import ToDo from './ToDo';
import {toggleToDo} from "../reducers/actions";
import store from '../store';

class ToDoListElement extends Component {
  render() {
    return (
        <li key={this.props.todo.id} onClick={() => store.dispatch(toggleToDo(this.props.todo.id))}>
          <ToDo name={this.props.todo.name} isCompleted={this.props.todo.isCompleted} />
        </li>
    );
  }
}

export default ToDoListElement;
