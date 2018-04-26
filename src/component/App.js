import React, { Component } from "react";
import VisibleToDoList from "./todo/VisibleToDoList";
import ListsContainer from "./todo/ListsContainer";
import { connect } from "react-redux";
import { loadTodos, loadLists } from "../api-actions";

class App extends Component {
  async componentDidMount() {
    const { dispatch } = this.props;

    dispatch(loadLists());
    dispatch(loadTodos());
  }

  render() {
    return (
      <div>
        <ListsContainer />
        <VisibleToDoList />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  dispatch: state.dispatch
});

export default connect(mapStateToProps)(App);
