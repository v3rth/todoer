import store from "../store";
import * as actions from "./actions";

export const addToDo = (listId, name) => store.dispatch(actions.addToDo(listId, name));
export const toggleToDo = id => store.dispatch(actions.toggleToDo(id));
export const removeToDo = id => store.dispatch(actions.removeToDo(id));

export const addList = name => store.dispatch(actions.addList(name));
export const removeList = id => store.dispatch(actions.removeList(id));
export const selectList = listId => store.dispatch(actions.selectList(listId));

export const setVisibility = value => store.dispatch(actions.setVisibility(value));
