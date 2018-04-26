import { setVisibility } from "../../actions";
import { connect } from "react-redux";
import {Radio} from "rmwc";

const mapStateToProps = (state, ownProps) => ({
  checked: ownProps.list === state.visibility,
  value: ownProps.list
});

const mapDispatchToProps = dispatch => ({
  onChange: (evt) => dispatch(setVisibility(evt.target.value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Radio);
