import React from "react";
import ListElement from "./ListElement";
import AddList from "./AddList";
import ListAllToDos from "./ListAllToDos";

const ALL_TASKS = {
  id: 'ALL_TASKS',
  name: 'ALL TASKS'
};

const Lists = ({ lists }) => {
  return (
    <div>
      <AddList />
      <ul>
        <li>
          <ListAllToDos list={ALL_TASKS}>
            <strong>ALL TODOS</strong>
          </ListAllToDos>
        </li>
        <ListElement key={'ALL_LISTS'} list={'ALL LISTS'} />
        {lists.map(list => <ListElement key={list.id} list={list} />)}
      </ul>
    </div>
  );
};

export default Lists;
