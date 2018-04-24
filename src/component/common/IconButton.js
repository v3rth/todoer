import React from 'react';
import Icon from "./Icon";

const IconButton = ({onClick, icon}) => {
  return (
      <button onClick={onClick}>
        <Icon img={icon}/>
      ️</button>
  );
};

export default IconButton;
