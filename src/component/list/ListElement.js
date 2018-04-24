import React from "react";
import List from "./List";
import DeleteListButton from "./DeleteListButton";

const ListElement = ({ list }) => {
  return (
    <li>
      <List list={list}>{list.name}</List>
      <DeleteListButton list={list} />
    </li>
  );
};

export default ListElement;
