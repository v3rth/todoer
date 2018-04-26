
function newListFromAction(action) {
  return {
    id: action.id,
    name: action.name
  };
}

export default function lists(state = [], action) {
  switch (action.type) {
    case 'ADD_LIST':
      return [...state, newListFromAction(action)];
    case 'REMOVE_LIST':
      return state.filter(list => list.id !== action.id);
    case 'FETCH_LISTS':
      return action.lists.map(list => ({id: list.id, name: list.name}));
    default:
      return state;
  }
}
