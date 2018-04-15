import {combineReducers, createStore} from "redux";
import todos from "./reducers/todos";
import visibility from "./reducers/visibility";

export default createStore(combineReducers({
  todos,
  visibility
}));
