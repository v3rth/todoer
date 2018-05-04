import { connect } from "react-redux";
import {Icon} from "rmwc";
import {editList} from "../../actions";

const mapStateToProps = () => ({
  children: 'edit'
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(editList(ownProps.list.id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Icon);
