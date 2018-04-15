let nextId = 0;

export function addToDo(name) {
  return {
    type: 'ADD_TODO',
    id: ++nextId,
    name
  }
}

export function toggleToDo(id) {
  return {
    type: 'TOGGLE_TODO',
    id: id
  }
}

export function setVisibility(value) {
  return {
    type: 'SET_VISIBILITY',
    value: value
  }
}
