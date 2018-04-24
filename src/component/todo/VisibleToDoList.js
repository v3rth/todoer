import { connect } from "react-redux";
import * as apiActions from "../../api/actions";
import Todos from "./ToDos";

function hasCorrectStatus(visibility, todo) {
  switch (visibility) {
    case "COMPLETED":
      return todo.isCompleted;
    case "UNCOMPLETED":
      return !todo.isCompleted;
    default:
      return true;
  }
}

function isInSelectedList(todo, state) {
  return todo.list === state.selectedList;
}

function filterToDo(state) {
  return todo => {
    return (
      isInSelectedList(todo, state) && hasCorrectStatus(state.visibility, todo)
    );
  };
}

const mapStateToProps = state => ({
  todos: state.todos.filter(filterToDo(state)),
  selectedList: state.selectedList
});

const mapDispatchToProps = dispatch => ({
  addToDo: (listId, name) => dispatch(apiActions.createToDo(listId, name))
});

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
