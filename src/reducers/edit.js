const DEFAULT = {id: null, type: null};

function edit(state = DEFAULT, action) {
  switch (action.type) {
    case 'EDIT_TODO':
      return {
        id: action.id,
        type: 'todo'
      };
    case 'EDIT_LIST':
      return {
        id: action.id,
        type: 'list'
      };
    case 'RESET_EDIT':
      return DEFAULT;
    default:
      return state;
  }
}

export default edit;
