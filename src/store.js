import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import visibility from "./reducers/visibility";
import lists from "./reducers/lists";
import selectedList from "./reducers/selectedList";
import todos from "./reducers/todos";

export default createStore(
  combineReducers({
    lists,
    todos,
    selectedList,
    visibility
  }),
  applyMiddleware(thunk)
);
