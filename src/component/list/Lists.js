import React from "react";
import ListElement from "./ListElement";
import AddList from "./AddList";
import ListAllToDos from "./ListAllToDos";
import {List, ListItem, ListItemGraphic, ListItemMeta, ListItemText} from "rmwc";

const ALL_TASKS = {
  id: 'ALL_TASKS',
  name: 'ALL TASKS'
};

const Lists = ({ lists, selectedList }) => {
  return (
    <div>
      <List>
        <ListItem activated={selectedList === 'ALL_TODOS'}>
          <ListAllToDos list={ALL_TASKS} />
          <ListItemMeta>star</ListItemMeta>
        </ListItem>

        {lists.map(list => <ListElement active={list.id === selectedList} key={list.id} list={list} />)}
      </List>
      <AddList />
    </div>
  );
};

export default Lists;
