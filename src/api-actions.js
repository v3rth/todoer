import * as apiList from "./api/list";
import * as apiToDo from "./api/todo";
import * as actions from "./actions";
import { parseList, parseToDoFromAPI } from "./api/parsers";

export function loadLists() {
  return async dispatch => {
    const lists = (await apiList.getAll()).map(parseList);
    dispatch(actions.fetchLists(lists));
  };
}

export function loadTodos() {
  return async dispatch => {
    const todos = (await apiToDo.getAll()).map(parseToDoFromAPI);
    dispatch(actions.fetchToDos(todos));
  };
}

export function createList(name) {
  return async dispatch => {
    const newList = parseList(await apiList.create(name));
    dispatch(actions.addList(newList));
  };
}

export function removeList(id) {
  return async dispatch => {
    await apiList.remove(id);
    dispatch(actions.removeList(id));
  };
}

export function removeToDo(id) {
  return async dispatch => {
    await apiToDo.remove(id);
    dispatch(actions.removeToDo(id));
  };
}

export function createToDo(listId, name) {
  return async dispatch => {
    const newToDo = await apiToDo.create(listId, name, false);
    dispatch(actions.addToDo(parseToDoFromAPI(newToDo)));
  };
}

export function updateToDo(todo) {
  return async dispatch => {
    dispatch(actions.resetEdit());
    const newToDo = await apiToDo.update(todo);
    dispatch(actions.updateToDo(todo.id, parseToDoFromAPI(newToDo)));

  };
}

export function selectList(listId) {
  return async dispatch => {
    (await apiToDo.getFromList(listId))
        .map(parseToDoFromAPI)
        .forEach(todo => dispatch(actions.updateToDo(todo.id, todo)));

    dispatch(actions.selectList(listId));
  };
}
