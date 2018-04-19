import React, { Component } from 'react';
import store from '../../store';
import {addToDo} from '../../reducers/actions';

class AddToDo extends Component {
  render() {
    return (
        <div>
          <input type="text" ref={node => this.input = node}/>
          <button onClick={() => this.clickAdd()}>Add</button>
        </div>
    );
  }

  clickAdd() {
    store.dispatch(addToDo(store.getState().selectedList, this.input.value));
    this.input.value = '';
  }
}

export default AddToDo;
