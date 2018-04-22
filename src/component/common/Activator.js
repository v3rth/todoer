import React from 'react';
import PropTypes from 'prop-types';

const Activator = ({isActive, children, onSelect}) => {
  if (isActive) {
    return (<span>{children}</span>);
  } else {
    return (<a href={"#"} onClick={onSelect}>{children}</a>)
  }
};

Activator.propTypes = {
  isActive: PropTypes.bool.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default Activator;
