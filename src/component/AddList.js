import React from 'react';
import AddForm from "./common/AddForm";
import {addList} from '../reducers/dispatchers';

const AddList = () => {
  return <AddForm onSubmit={addList}/>
};

export default AddList;
