import React, { Component } from 'react';
import {setVisibility} from "../reducers/actions";
import store from "../store";

class VisibilityFilter extends Component {
  render() {
    if (store.getState().visibility === this.props.list) {
      return (
          <span>{this.props.children}</span>
      );
    }

    return (
      <a href="#" onClick={(e) => {e.preventDefault(); this.click()}}>
        {this.props.children}
      </a>
    );
  }

  click() {
    store.dispatch(setVisibility(this.props.list))
  }
}

export default VisibilityFilter;
