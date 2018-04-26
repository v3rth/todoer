import { connect } from "react-redux";
import {editToDo} from "../../actions";
import {ListItemGraphic, ListItemMeta} from "rmwc";

const mapStateToProps = () => ({
  children: 'edit',
  mini: true
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(editToDo(ownProps.todo.id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ListItemGraphic);