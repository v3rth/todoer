import { connect } from "react-redux";
import AddForm from "../common/AddForm";
import { createList } from "../../api-actions";

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  onSubmit: name => dispatch(createList(name))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddForm);
