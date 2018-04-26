import { connect } from "react-redux";
import AddForm from "../common/AddForm";
import {createToDo} from "../../api-actions";

const mapStateToProps = () => ({
  label: 'New todo name',
  labelSave: 'Add',
  outlined: true
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSubmit: name => dispatch(createToDo(ownProps.selectedList, name))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddForm);
