import React from "react";
import {connect} from "react-redux";
import {TextField} from "rmwc";
import {filterResults} from "../../actions";

const mapStateToProps = () => ({
  box: 'box',
  withLeadingIcon: 'search',
  label: 'Filter ToDos',
});

const mapDispatchToProps = dispatch => ({
  onChange: (event) => dispatch(filterResults(event.target.value))
});

export default connect(mapStateToProps, mapDispatchToProps)(TextField);
