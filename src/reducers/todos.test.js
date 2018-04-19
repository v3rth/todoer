import todos from "./todos";
import {addToDo, removeToDo, toggleToDo} from "./actions";

describe('todos', () => {
  it('returns empty todo list', () => {
    expect(todos(undefined, {})).toEqual([])
  });

  it('adds todo', () => {
    expect(todos([], addToDo(1, 'test'))).toEqual([
      {id: 1, name: 'test', isCompleted: false}
    ])
  });

  it('removes todo', () => {
    const input = [
      {id: 1, name: 'A', isCompleted: false},
      {id: 2, name: 'B', isCompleted: false}
    ];

    expect(todos(input, removeToDo(1))).toEqual([
      {id: 2, name: 'B', isCompleted: false}
    ])
  });

  it('toggles todo', () => {
    const input = [
      {id: 1, name: 'A', isCompleted: false},
      {id: 2, name: 'B', isCompleted: false}
    ];

    expect(todos(input, toggleToDo(2))).toEqual([
      {id: 1, name: 'A', isCompleted: false},
      {id: 2, name: 'B', isCompleted: true}
    ])
  })
});
