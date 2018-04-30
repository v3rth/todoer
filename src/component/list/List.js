import { connect } from "react-redux";
import {selectList} from "../../api-actions";
import {ListItemText} from "rmwc";

const mapStateToProps = (state, ownProps) => ({
  selected: ownProps.list.id === state.selectedList,
  children: ownProps.list.name
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(selectList(ownProps.list.id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ListItemText);
