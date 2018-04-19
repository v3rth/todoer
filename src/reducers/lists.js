import todos from "./todos";

function newListFromAction(action) {
  return {
    id: action.id,
    name: action.name,
    todos: []
  };
}

function getState(list, action) {
  return {...list, todos: todos(list.todos, action)};
}

function passAction(state, action) {
  return state.map(list => getState(list, action));
}

export default function lists(state = [], action) {
  switch (action.type) {
    case 'ADD_LIST':
      return [...state, newListFromAction(action)];
    case 'REMOVE_LIST':
      return state.filter(list => list.id !== action.id);
    case 'ADD_TODO':
      return state.map((list) => {
        return list.id === action.listId ? getState(list, action) : list
      });
    case 'TOGGLE_TODO':
    case 'REMOVE_TODO':
      return passAction(state, action);
    default:
      return state;
  }
}
