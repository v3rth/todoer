
function newListFromAction(action) {
  return {
    id: action.id,
    name: action.name,
    todos: []
  };
}

export default function lists(state = [], action) {
  switch (action.type) {
    case 'ADD_LIST':
      return [...state, newListFromAction(action)];
    case 'REMOVE_LIST':
      return state.filter(list => list.id !== action.id);
    default:
      return state;
  }
}
