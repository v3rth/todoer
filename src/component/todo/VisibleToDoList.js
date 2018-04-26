import { connect } from "react-redux";
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
  return todo.list === state.selectedList || state.selectedList === 'ALL_TODOS';
}

function containsFilteredText(filter, name) {
  if (filter === '' || typeof filter !== 'string') {
    return true;
  }

  return name.indexOf(filter) > -1;
}

function filterToDo(state) {
  return todo => {
    return (
      isInSelectedList(todo, state) && hasCorrectStatus(state.visibility, todo) && containsFilteredText(state.filter, todo.name)
    );
  };
}

const mapStateToProps = state => ({
  todos: state.todos.filter(filterToDo(state)),
  selectedList: state.selectedList
});

export default connect(mapStateToProps)(Todos);
