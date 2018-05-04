import React from "react";
import AddListForm from "./AddListForm";
import {List, ListDivider} from "rmwc";
import ListRow from "./ListRow";
import AllToDoListElement from "./AllToDoListElement";

const Lists = ({ lists, editableList }) => {
  return (
    <div>
      <List>
        <AllToDoListElement/>
        <ListDivider/>
        {lists.map(list => <ListRow key={list.id} isEditable={list.id === editableList} list={list} />)}
      </List>
      <AddListForm />
    </div>
  );
};

export default Lists;
