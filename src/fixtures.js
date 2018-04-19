import {addToDo, toggleToDo, addList} from "./reducers/actions";
import store from './store';

function fixtures() {
  store.dispatch(addList('Lista A'));
  store.dispatch(addList('Lista B'));

  store.dispatch(addToDo(1, 'Wynieść śmieci'));
  store.dispatch(addToDo(1, 'Kupić mleko'));
  store.dispatch(addToDo(1, 'Posprzątać pokój'));
  store.dispatch(addToDo(2, 'Sprzedać traktor'));
  store.dispatch(toggleToDo(2));
}

export default fixtures;