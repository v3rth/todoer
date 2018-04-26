import { connect } from "react-redux";
import { removeList } from "../../api-actions";
import {Fab, ListItemMeta} from "rmwc";

const mapStateToProps = () => ({
  children: 'delete',
  mini: true
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(removeList(ownProps.list.id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ListItemMeta);
