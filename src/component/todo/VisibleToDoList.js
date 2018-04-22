import {connect} from "react-redux";
import _ from "underscore";
import * as actions from "../../reducers/actions";
import Todos from "./ToDos";

function filterTodos(visibility) {
  return (todo) => {
    switch(visibility) {
      case 'COMPLETED':
        return todo.isCompleted;
      case 'UNCOMPLETED':
        return !todo.isCompleted;
      default:
        return true
    }
  }
}

function getToDos(lists, selectedListId) {
  const selected = _.find(lists, (list) => list.id === selectedListId);

  if (!selected) {
    return [];
  }

  return selected ? selected.todos : [];
}

const mapStateToProps = state => ({
  todos: getToDos(state.lists, state.selectedList).filter(filterTodos(state.visibility)),
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
