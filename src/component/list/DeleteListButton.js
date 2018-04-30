import { connect } from "react-redux";
import { removeList } from "../../api-actions";
import {ListItemMeta} from "rmwc";

const mapStateToProps = () => ({
  children: 'delete'
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(removeList(ownProps.list.id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ListItemMeta);
