import React, { Component } from 'react';
import {setVisibility} from "../reducers/actions";
import store from "../store";
import Activator from "./common/Activator";

class VisibilityFilter extends Component {
  render() {
    return (
        <Activator onSelect={this.click.bind(this)} isActive={this.isActive()}>
          {this.props.children}
        </Activator>
    );
  }

  isActive() {
    return store.getState().visibility === this.props.list;
  }

  click() {
    store.dispatch(setVisibility(this.props.list))
  }
}

export default VisibilityFilter;
