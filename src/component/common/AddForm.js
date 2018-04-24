import React, { Component } from 'react';

class AddForm extends Component {
  render() {
    return (
        <div>
          <input type="text" ref={node => this.input = node} defaultValue={this.props.defaultValue}/>
          <button onClick={() => this.clickAdd()}>Save</button>
        </div>
    );
  }

  clickAdd() {
    this.props.onSubmit(this.input.value);
    this.input.value = '';
  }
}

export default AddForm;
