import { connect } from "react-redux";
import { updateToDo } from "../../api-actions";
import {Checkbox} from "rmwc";

const mapStateToProps = (state, ownProps) => ({
  checked: ownProps.todo.isCompleted,
  children: ownProps.todo.name
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onChange: event => dispatch(updateToDo({...ownProps.todo, isCompleted: event.target.checked}))
});

export default connect(mapStateToProps, mapDispatchToProps)(Checkbox);
