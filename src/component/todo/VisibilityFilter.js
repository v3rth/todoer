import {setVisibility} from "../../reducers/actions";
import Activator from "../common/Activator";
import {connect} from "react-redux";

const mapStateToProps = (state, ownProps) => ({
  isActive: ownProps.list === state.visibility
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSelect: () => dispatch(setVisibility(ownProps.list))
});

export default connect(mapStateToProps, mapDispatchToProps)(Activator);
