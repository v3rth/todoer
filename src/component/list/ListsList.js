import React, { Component } from 'react';
import store from '../../store';
import {selectList} from "../../reducers/actions";
import ListElement from "./ListElement";

class ListsList extends Component {
  constructor(props) {
    super(props);

    this.state = store.getState();
    store.subscribe(() => this.setState(store.getState()));
  }

  render() {
    return (
        <ul>
          { this.state.lists.map(list => <ListElement key={list.id} click={() => this.click(list.id)} list={list}/>) }
        </ul>
    );
  }

  click(listId) {
    store.dispatch(selectList(listId))
  }
}

export default ListsList;
