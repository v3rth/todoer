function todo(state, action) {
  switch (action.type) {
    case "TOGGLE_TODO":
      if (action.id === state.id) {
        return {
          ...state,
          isCompleted: !state.isCompleted
        };
      }
      return state;
    case "UPDATE_TODO":
      if (action.id === state.id) {
        return {
          ...state,
          ...action.todo
        };
      }
      return state;
    default:
      return state;
  }
}

export default todo;
