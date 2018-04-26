function filter(state = '', action) {
  switch (action.type) {
    case 'FILTER_RESULTS':
      return action.text;
    case 'RESET_FILTER':
      return '';
    default:
      return state;
  }
}

export default filter;