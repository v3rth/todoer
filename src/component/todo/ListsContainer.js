import * as actions from "../../reducers/actions";
import {connect} from "react-redux";
import Lists from "../list/Lists";

const mapStateToProps = state => ({
  lists: state.lists
});

const mapDispatchToProps = dispatch => ({
  addList: name => dispatch(actions.addList(name)),
  removeList: id => dispatch(actions.removeList(id)),
  selectList: listId => dispatch(actions.selectList(listId)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Lists);
