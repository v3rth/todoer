import React from "react";
import List from "./List";
import DeleteListButton from "./DeleteListButton";
import {ListItem} from "rmwc";

const ListElement = ({ list, active }) => {
  return (
      <ListItem activated={active}>
        <List list={list}>{list.name}</List>
        <DeleteListButton list={list} />
      </ListItem>
  );
};

export default ListElement;
