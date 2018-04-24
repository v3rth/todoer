import todos from "./todos";
import { addToDo, removeToDo, toggleToDo, updateToDo } from "../actions";

describe("todos", () => {
  it("returns empty todo list", () => {
    expect(todos(undefined, {})).toEqual([]);
  });

  it("adds todo", () => {
    expect(todos([], addToDo({id: 1, list:1, name: 'test', isCompleted: false}))).toEqual([
      { id: 1, list: 1, name: "test", isCompleted: false }
    ]);
  });

  it("removes todo", () => {
    const input = [
      { id: 1, name: "A", isCompleted: false },
      { id: 2, name: "B", isCompleted: false }
    ];

    expect(todos(input, removeToDo(1))).toEqual([
      { id: 2, name: "B", isCompleted: false }
    ]);
  });

  it("toggles todo", () => {
    const input = [
      { id: 1, name: "A", isCompleted: false },
      { id: 2, name: "B", isCompleted: false }
    ];

    expect(todos(input, toggleToDo(2))).toEqual([
      { id: 1, name: "A", isCompleted: false },
      { id: 2, name: "B", isCompleted: true }
    ]);
  });

  it("updates todos", () => {
    const input = [
      { id: 1, list: 1, name: "A", isCompleted: false },
      { id: 2, list: 1, name: "B", isCompleted: false }
    ];

    expect(todos(input, updateToDo(2, {id: 2, name: 'X', isCompleted: true}))).toEqual([
      { id: 1, list: 1, name: "A", isCompleted: false },
      { id: 2, list: 1, name: "X", isCompleted: true }
    ]);
  });

});
