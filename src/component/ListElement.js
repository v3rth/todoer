import React from 'react';
import store from '../store';
import {removeList, selectList} from "../reducers/dispatchers";
import Activator from "./common/Activator";
import DeleteButton from "./common/DeleteButton";

function isActive(id) {
  return id === store.getState().selectedList;
}

const ListElement = ({list}) => {
  return (
      <li>
        <Activator onSelect={() => selectList(list.id)} isActive={isActive(list.id)}>
          {list.name}
        </Activator>
        <DeleteButton onDelete={() => removeList(list.id)}/>
      </li>
  )
};

export default ListElement;
