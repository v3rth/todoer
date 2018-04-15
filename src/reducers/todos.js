import todo from "./todo";

function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      let newToDo = {
        id: action.id,
        name: action.name,
        isCompleted: false
      };

      return [...state, newToDo];
    case 'TOGGLE_TODO':
      return state.map(t => todo(t, action));
    default:
      return state;
  }
}

export default todos;