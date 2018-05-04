import { connect } from "react-redux";
import {SimpleListItem} from "rmwc";
import DeleteListButton from "./DeleteListIcon";
import React from "react";
import EditListIcon from "./EditListIcon";
import {selectList} from "../../api-actions";

const mapStateToProps = (state, ownProps) => ({
  selected: ownProps.list.id === state.selectedList,
  text: ownProps.list.name,
  graphic: <EditListIcon list={ownProps.list}/>,
  meta: <DeleteListButton list={ownProps.list}/>
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(selectList(ownProps.list.id))
});

export default connect(mapStateToProps, mapDispatchToProps)(SimpleListItem);


