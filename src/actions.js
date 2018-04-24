export function addToDo({id, list, name, isCompleted}) {
  return {
    type: "ADD_TODO",
    id,
    list,
    name,
    isCompleted
  };
}

export function updateToDo(id, todo) {
  return {
    type: "UPDATE_TODO",
    id: todo.id,
    todo
  };
}

export function toggleToDo(id) {
  return {
    type: "TOGGLE_TODO",
    id: id
  };
}

export function removeToDo(id) {
  return {
    type: "REMOVE_TODO",
    id: id
  };
}

export function setVisibility(value) {
  return {
    type: "SET_VISIBILITY",
    value: value
  };
}

export function addList({ id, name }) {
  return {
    type: "ADD_LIST",
    id,
    name
  };
}

export function removeList(id) {
  return {
    type: "REMOVE_LIST",
    id
  };
}

export function selectList(listId) {
  return {
    type: "SELECT_LIST",
    id: listId
  };
}

export function fetchLists(lists) {
  return {
    type: "FETCH_LISTS",
    lists
  };
}

export function fetchToDos(todos) {
  return {
    type: "FETCH_TODOS",
    todos
  };
}
