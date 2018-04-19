import React from 'react';
import Icon from "./Icon";

const DeleteButton = ({onDelete}) => {
  return (
      <button onClick={onDelete}>
        <Icon img="🗑"/>
      ️</button>
  );
};

export default DeleteButton;
