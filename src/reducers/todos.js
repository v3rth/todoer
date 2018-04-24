import todo from "./todo";

function createNew(action) {
  return {
    id: action.id,
    list: action.list,
    name: action.name,
    isCompleted: action.isCompleted
  };
}

function todos(state = [], action) {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, createNew(action)];
    case "TOGGLE_TODO":
    case "UPDATE_TODO":
      return state.map(t => todo(t, action));
    case "REMOVE_TODO":
      return state.filter(todo => todo.id !== action.id);
    case "FETCH_TODOS":
      return action.todos.map(todo => ({ ...todo }));
    default:
      return state;
  }
}

export default todos;
