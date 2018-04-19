import React, { Component } from 'react';
import {removeToDo} from "../../reducers/actions";
import store from '../../store';

class RemoveToDo extends Component {
  render() {
    return (
        <span onClick={() => store.dispatch(removeToDo(this.props.todo.id))}>
          usuń
        </span>
    );
  }
}

export default RemoveToDo;
