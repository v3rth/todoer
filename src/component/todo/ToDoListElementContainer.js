import {connect} from "react-redux";
import ToDoListElement from "./ToDoListElement";

const mapStateToProps = (state, ownProps) => ({
  todo: ownProps.todo,
  edit: state.edit.type === 'todo' && state.edit.id === ownProps.todo.id
});

export default connect(mapStateToProps)(ToDoListElement);
