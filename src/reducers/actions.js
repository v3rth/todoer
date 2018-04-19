let nextToDoId = 0;
let nextListId = 0;

export function addToDo(listId, name) {
  return {
    type: 'ADD_TODO',
    id: ++nextToDoId,
    listId: listId,
    name
  }
}

export function toggleToDo(id) {
  return {
    type: 'TOGGLE_TODO',
    id: id
  }
}

export function removeToDo(id) {
  return {
    type: 'REMOVE_TODO',
    id: id
  }
}

export function setVisibility(value) {
  return {
    type: 'SET_VISIBILITY',
    value: value
  }
}

export function addList(name) {
  return {
    type: 'ADD_LIST',
    id: ++nextListId,
    name,
    todos: []
  }
}

export function removeList(id) {
  return {
    type: 'REMOVE_LIST',
    id
  }
}

export function selectList(listId) {
  return {
    type: 'SELECT_LIST',
    id: listId
  }
}
