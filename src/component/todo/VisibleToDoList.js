import {connect} from "react-redux";
import * as actions from "../../reducers/actions";
import Todos from "./ToDos";

function hasCorrectStatus(visibility, todo) {
    switch(visibility) {
      case 'COMPLETED':
        return todo.isCompleted;
      case 'UNCOMPLETED':
        return !todo.isCompleted;
      default:
        return true
    }
}

function isInSelectedList(todo, state) {
  return todo.list === state.selectedList;
}

function filterToDo(state) {
  return (todo) => {
    return isInSelectedList(todo, state) && hasCorrectStatus(state.visibility, todo)
  }
}

const mapStateToProps = state => ({
  todos: state.todos.filter(filterToDo(state)),
  selectedList: state.selectedList
});

const mapDispatchToProps = dispatch => ({
  addToDo: (listId, name) => dispatch(actions.addToDo(listId, name)),
  toggleToDo: id => dispatch(actions.toggleToDo(id)),
  removeToDo: id => dispatch(actions.removeToDo(id)),
  setVisibility: value => dispatch(actions.setVisibility(value))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Todos);
