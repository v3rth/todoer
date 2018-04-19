import todo from "./todo";

function createNew(action) {
  return {
    id: action.id,
    name: action.name,
    isCompleted: false
  };
}

function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, createNew(action)];
    case 'TOGGLE_TODO':
      return state.map(t => todo(t, action));
    case 'REMOVE_TODO':
      return state.filter(todo => todo.id !== action.id);
    default:
      return state;
  }
}

export default todos;