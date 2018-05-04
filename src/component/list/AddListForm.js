import { connect } from "react-redux";
import AddForm from "../common/AddForm";
import { createList } from "../../api-actions";

const mapStateToProps = () => ({
  label: 'New list name',
  labelSave: 'Add',
  outlined: true
});

const mapDispatchToProps = dispatch => ({
  onSubmit: name => dispatch(createList(name))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddForm);
