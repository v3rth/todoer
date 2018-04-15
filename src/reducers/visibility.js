function visibility(state = 'ALL', action) {
  switch (action.type) {
    case 'SET_VISIBILITY':
      return action.value;
    default:
      return state;
  }
}

export default visibility;