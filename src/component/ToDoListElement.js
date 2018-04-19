import React, { Component } from 'react';
import ToDo from './ToDo';
import {toggleToDo, removeToDo} from "../reducers/dispatchers";
import DeleteButton from "./common/DeleteButton";

class ToDoListElement extends Component {
  render() {
    return (
        <li key={this.props.todo.id}>
          <ToDo onClickName={() => toggleToDo(this.props.todo.id)} name={this.props.todo.name} isCompleted={this.props.todo.isCompleted} />
          <DeleteButton onDelete={() => removeToDo(this.props.todo.id)} />
        </li>
    );
  }
}

export default ToDoListElement;
