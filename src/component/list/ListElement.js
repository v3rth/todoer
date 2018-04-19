import React, { Component } from 'react';
import Icon from "../Icon";
import store from '../../store';
import Activator from "./Activator";
import {removeList, selectList} from "../../reducers/actions";

class ListElement extends Component {
  render() {
    return (
        <li>
          <Activator onSelect={this.clickOnName.bind(this)} isActive={this.isActive()}>
            {this.props.list.name}
          </Activator>
          <Icon click={this.clickOnIcon.bind(this)} image={'usuń'}/>
        </li>
    )
  }

  isActive() {
    return this.props.list.id === store.getState().selectedList;
  }

  clickOnIcon() {
    store.dispatch(removeList(this.props.list.id));
  }

  clickOnName() {
    store.dispatch(selectList(this.props.list.id));
  }
}

export default ListElement;
