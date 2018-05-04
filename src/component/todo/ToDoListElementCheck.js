import { connect } from "react-redux";
import {SimpleListItem} from "rmwc";
import React from "react";
import CheckableToDo from "./CheckableToDo";
import EditToDoIcon from "./EditToDoIcon";
import DeleteToDoIcon from "./DeleteToDoIcon";

const mapStateToProps = (state, ownProps) => ({
  text: <CheckableToDo todo={ownProps.todo} />,
  graphic: <EditToDoIcon todo={ownProps.todo} />,
  meta: <DeleteToDoIcon todo={ownProps.todo} />
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SimpleListItem);


