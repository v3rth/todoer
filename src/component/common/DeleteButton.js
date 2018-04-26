import { connect } from "react-redux";
import { removeToDo } from "../../api-actions";
import IconButton from "./IconButton";

const mapStateToProps = () => ({
  icon: '🗑'
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(removeToDo(ownProps.todo.id))
});

export default connect(mapStateToProps, mapDispatchToProps)(IconButton);

