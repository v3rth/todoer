import AddForm from "../common/AddForm";
import {connect} from "react-redux";
import {updateToDo} from "../../api/actions";

const mapStateToProps = (state, ownProps) => ({
  defaultValue: ownProps.todo.name
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSubmit: name => dispatch(updateToDo({...ownProps.todo, name: name}))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddForm);
