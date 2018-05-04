import { connect } from "react-redux";
import {SimpleListItem} from "rmwc";
import {selectListWithAllToDos} from "../../actions";

const mapStateToProps = (state) => ({
  selected: 'ALL_TODOS' === state.selectedList,
  text: 'ALL TODOS',
  graphic: '',
  meta: 'star'
});

const mapDispatchToProps = (dispatch) => ({
  onClick: () => dispatch(selectListWithAllToDos())
});

export default connect(mapStateToProps, mapDispatchToProps)(SimpleListItem);


