import lists from './lists';
import {addList, addToDo, removeList} from "./actions";

describe('list', () => {
  it('returns empty list of lists', () => {
    expect(lists(undefined, {})).toEqual([])
  });

  it('adds new list', () => {
    expect(lists([], addList('test'))).toEqual([{
      id: 1,
      name: 'test',
      todos: []
    }])
  });

  it('deletes list', () => {
    const input = [
      {id: 1, name: 'A', todos: []},
      {id: 2, name: 'B', todos: []},
      {id: 3, name: 'C', todos: []}
    ];

    expect(lists(input, removeList(2))).toEqual([
      {id: 1, name: 'A', todos: []},
      {id: 3, name: 'C', todos: []}
    ])
  });

  it('adds todo to specific list', () => {
    const input = [
      {id: 1, name: 'A', todos: []},
      {id: 2, name: 'B', todos: []},
      {id: 3, name: 'C', todos: []}
    ];

    expect(lists(input, addToDo(3, 'test'))).toEqual([
      {id: 1, name: 'A', todos: []},
      {id: 2, name: 'B', todos: []},
      {id: 3, name: 'C', todos: [{id: 1, name: 'test', isCompleted: false}]}
    ])
  })
});
