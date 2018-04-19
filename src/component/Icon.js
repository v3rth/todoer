import React, { Component } from 'react';

class Icon extends Component {
  render() {
    return (
        <span onClick={() => this.props.click()}>{this.props.image}</span>
    );
  }
}

export default Icon;
