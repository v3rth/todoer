import AddForm from "../common/AddForm";
import {connect} from "react-redux";
import {updateList} from "../../api-actions";

const mapStateToProps = (state, ownProps) => ({
  defaultValue: ownProps.list.name,
  label: null,
  outlined: false
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSubmit: name => dispatch(updateList(ownProps.list.id, name))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddForm);
