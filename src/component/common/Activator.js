import React from 'react';

const Activator = ({isActive, children, onSelect}) => {
  if (isActive) {
    return (<span>{children}</span>);
  } else {
    return (<a href={"#"} onClick={onSelect}>{children}</a>)
  }
};

export default Activator;
