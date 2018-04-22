import {connect} from "react-redux";
import DeleteButton from "../common/DeleteButton";
import {removeToDo} from "../../reducers/actions";

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onDelete: () => dispatch(removeToDo(ownProps.todo.id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DeleteButton);
