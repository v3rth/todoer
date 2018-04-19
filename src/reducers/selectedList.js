function selectedList(state = null, action) {
  if (action.type === 'SELECT_LIST') {
    return action.id;
  }

  if (action.type === 'REMOVE_LIST' && action.id === state) {
    return null;
  }

  return state;
}

export default selectedList;