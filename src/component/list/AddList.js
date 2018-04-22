import {connect} from "react-redux";
import AddForm from "../common/AddForm";
import {addList} from "../../reducers/actions";

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  onSubmit: name => dispatch(addList(name))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddForm);
