import {combineReducers, createStore} from "redux";
import visibility from "./reducers/visibility";
import lists from "./reducers/lists";
import selectedList from "./reducers/selectedList";

export default createStore(combineReducers({
  lists,
  selectedList,
  visibility
}));
