import {toggleToDo} from "../../reducers/actions";
import ToDo from "./ToDo";
import {connect} from "react-redux";

const mapStateToProps = (state, ownProps) => ({
  todo: ownProps.todo
});

const mapDispatchToProps = dispatch => ({
  toggleToDo: id => dispatch(toggleToDo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDo);
