import edit from "./edit";
import {editList, editToDo, resetEdit} from "../actions";

describe("list", () => {
  it("returns default value", () => {
    expect(edit(undefined, {})).toEqual({
      id: null,
      type: null
    });
  });

  it("turns on edit mode for todo", () => {
    expect(edit(undefined, editToDo(1))).toEqual({
      id: 1,
      type: 'todo'
    });
  });

  it("overrides todo edit mode by list edit mode", () => {
    const initState = {
      id: 1,
      type: 'todo'
    };

    expect(edit(initState, editList(3))).toEqual({
      id: 3,
      type: 'list'
    });
  });

  it('resets edit mode to default', () => {
    const initState = {
      id: 1,
      type: 'todo'
    };

    expect(edit(initState, resetEdit())).toEqual({
      id: null,
      type: null
    });
  });
});