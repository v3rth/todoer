import React, { Component } from 'react';
import {Button, TextField} from "rmwc";

class AddForm extends Component {
  render() {
    return (
        <div>
          <TextField outlined={this.props.outlined} label={this.props.label || ''} ref={node => this.input = node} defaultValue={this.props.defaultValue} />
          <Button raised onClick={() => this.clickAdd()}>{this.props.labelSave || 'Save'}</Button>
        </div>
    );
  }

  clickAdd() {
    this.props.onSubmit(this.input.value);
    this.input.value = '';
  }
}

export default AddForm;
