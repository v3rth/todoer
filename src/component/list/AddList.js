import React, { Component } from 'react';
import store from '../../store';
import {addList} from '../../reducers/actions';

class AddList extends Component {
  render() {
    return (
        <div>
          <input type="text" ref={node => this.input = node}/>
          <button onClick={() => this.clickAdd()}>Add</button>
        </div>
    );
  }

  clickAdd() {
    store.dispatch(addList(this.input.value));
    this.input.value = '';
  }
}

export default AddList;
