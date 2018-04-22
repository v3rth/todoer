import {connect} from "react-redux";
import DeleteButton from "../common/DeleteButton";
import {removeList} from "../../reducers/actions";

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onDelete: () => dispatch(removeList(ownProps.list.id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DeleteButton);
