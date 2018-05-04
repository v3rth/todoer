import React from "react";
import ListElement from "./ListElement";
import EditListForm from "./EditListForm";

const ListRow = ({ list, isEditable }) => {
  return isEditable ? <EditListForm list={list}/> : <ListElement list={list} />
};

export default ListRow;
