import { connect } from "react-redux";
import { removeToDo } from "../../api-actions";
import {ListItemMeta} from "rmwc";

const mapStateToProps = () => ({
  children: 'delete',
  mini: true
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(removeToDo(ownProps.todo.id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ListItemMeta);
