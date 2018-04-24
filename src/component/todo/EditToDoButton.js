import { connect } from "react-redux";
import IconButton from "../common/IconButton";
import {editToDo} from "../../actions";

const mapStateToProps = () => ({
  icon: 'Edit'
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(editToDo(ownProps.todo.id))
});

export default connect(mapStateToProps, mapDispatchToProps)(IconButton);