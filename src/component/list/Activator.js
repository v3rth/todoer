import React, { Component } from 'react';

class Activator extends Component {
  render() {

    if (this.props.isActive) {
      return (<span>{this.props.children}</span>);
    } else {
      return (<a href={"#"} onClick={() => this.props.onSelect()}>{this.props.children}</a>)
    }
  }
}

export default Activator;
