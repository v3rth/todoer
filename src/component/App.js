import React, { Component } from "react";
import VisibleToDoList from "./todo/VisibleToDoList";
import ListsContainer from "./list/ListsContainer";
import { connect } from "react-redux";
import { loadTodos, loadLists } from "../api-actions";
import {Grid, GridCell} from "rmwc";

class App extends Component {
  async componentDidMount() {
    const { dispatch } = this.props;

    dispatch(loadLists());
    dispatch(loadTodos());
  }

  render() {
    return (
      <Grid>
        <GridCell span="2"><ListsContainer/></GridCell>
        <GridCell span="1"></GridCell>
        <GridCell span="6"><VisibleToDoList/></GridCell>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  dispatch: state.dispatch
});

export default connect(mapStateToProps)(App);
