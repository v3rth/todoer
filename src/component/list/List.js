import Activator from "../common/Activator";
import {connect} from "react-redux";
import {selectList} from "../../reducers/actions";

const mapStateToProps = (state, ownProps) => ({
  isActive: ownProps.list.id === state.selectedList
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSelect: () => dispatch(selectList(ownProps.list.id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Activator);
