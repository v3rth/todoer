import { connect } from "react-redux";
import {SimpleListItem} from "rmwc";
import React from "react";
import DeleteToDoIcon from "./DeleteToDoIcon";
import EditableToDo from "./EditableToDo";

const mapStateToProps = (state, ownProps) => ({
  key: ownProps.todo.id,
  text: <EditableToDo todo={ownProps.todo} />,
  graphic: '',
  meta: <DeleteToDoIcon todo={ownProps.todo} />
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SimpleListItem);


