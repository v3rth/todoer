import React, { Component } from 'react';
import ToDo from './ToDo';
import RemoveToDo from './RemoveToDo';
import {toggleToDo} from "../../reducers/actions";
import store from '../../store';

class ToDoListElement extends Component {
  render() {
    return (
        <li key={this.props.todo.id}>
          <ToDo onClickName={() => store.dispatch(toggleToDo(this.props.todo.id))} name={this.props.todo.name} isCompleted={this.props.todo.isCompleted} />
          <RemoveToDo todo={this.props.todo}>usuń</RemoveToDo>
        </li>
    );
  }
}

export default ToDoListElement;
