import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import visibility from "./reducers/visibility";
import lists from "./reducers/lists";
import selectedList from "./reducers/selectedList";
import todos from "./reducers/todos";
import edit from "./reducers/edit";
import filter from "./reducers/filter";

export default createStore(
  combineReducers({
    lists,
    todos,
    edit,
    selectedList,
    filter,
    visibility
  }),
  applyMiddleware(thunk)
);
