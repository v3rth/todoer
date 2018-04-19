import React, { Component } from 'react';

class AddForm extends Component {
  render() {
    return (
        <div>
          <input type="text" ref={node => this.input = node}/>
          <button onClick={() => this.clickAdd()}>Add</button>
        </div>
    );
  }

  clickAdd() {
    this.props.onSubmit(this.input.value);
    this.input.value = '';
  }
}

export default AddForm;
