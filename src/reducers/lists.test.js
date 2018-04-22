import lists from './lists';
import {addList, removeList} from "./actions";

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
      {id: 1, name: 'A'},
      {id: 2, name: 'B'},
      {id: 3, name: 'C'}
    ];

    expect(lists(input, removeList(2))).toEqual([
      {id: 1, name: 'A'},
      {id: 3, name: 'C'}
    ])
  });
});
