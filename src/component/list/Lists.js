import React from "react";
import ListElement from "./ListElement";
import AddList from "./AddList";

const Lists = ({ lists }) => {
  return (
    <div>
      <AddList />
      <ul>{lists.map(list => <ListElement key={list.id} list={list} />)}</ul>
    </div>
  );
};

export default Lists;
