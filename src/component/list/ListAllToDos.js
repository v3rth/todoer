import { connect } from "react-redux";
import {selectListWithAllToDos} from "../../actions";
import {ListItemText} from "rmwc";

const mapStateToProps = () => ({
  children: 'ALL TODOS'
});

const mapDispatchToProps = (dispatch) => ({
  onClick: () => dispatch(selectListWithAllToDos())
});

export default connect(mapStateToProps, mapDispatchToProps)(ListItemText);
