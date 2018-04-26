import Activator from "../common/Activator";
import { connect } from "react-redux";
import {selectListWithAllToDos} from "../../actions";

const mapStateToProps = (state) => ({
  isActive: 'ALL_TODOS' === state.selectedList
});

const mapDispatchToProps = (dispatch) => ({
  onSelect: () => dispatch(selectListWithAllToDos())
});

export default connect(mapStateToProps, mapDispatchToProps)(Activator);
