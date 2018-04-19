import React, { Component } from 'react';

class ToDo extends Component {
  render() {
    let style = {'textDecoration': this.props.isCompleted ? 'line-through' : ''};

    return (
        <span onClick={() => this.props.onClickName()} style={style}>
          { this.props.name }
        </span>
    );
  }
}

export default ToDo;
