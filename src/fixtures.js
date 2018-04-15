import {addToDo, toggleToDo} from "./reducers/actions";
import store from './store';

function fixtures() {
  store.dispatch(addToDo('Wynieść śmieci'));
  store.dispatch(addToDo('Kupić mleko'));
  store.dispatch(addToDo('Posprzątać pokój'));
  store.dispatch(toggleToDo(2));
}

export default fixtures;