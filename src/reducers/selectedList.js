function selectedList(state = null, action) {
  if (action.type === 'SELECT_LIST') {
    return action.id;
  }

  return state;
}

export default selectedList;