import ToDoName from "./ToDoName";
import { connect } from "react-redux";
import { updateToDo } from "../../api/actions";

const mapStateToProps = (state, ownProps) => ({
  todo: ownProps.todo
});

const mapDispatchToProps = dispatch => ({
  toggleToDo: todo => dispatch(updateToDo({...todo, isCompleted: !todo.isCompleted}))
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDoName);
