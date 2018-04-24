import lists from "./lists";
import { addList, fetchLists, removeList } from "../actions";

describe("list", () => {
  it("returns empty list of lists", () => {
    expect(lists(undefined, {})).toEqual([]);
  });

  it("adds new list", () => {
    expect(lists([], addList({ id: 1, name: "test" }))).toEqual([
      {
        id: 1,
        name: "test",
        todos: []
      }
    ]);
  });

  it("deletes list", () => {
    const input = [
      { id: 1, name: "A" },
      { id: 2, name: "B" },
      { id: 3, name: "C" }
    ];

    expect(lists(input, removeList(2))).toEqual([
      { id: 1, name: "A" },
      { id: 3, name: "C" }
    ]);
  });

  it("fetch lists", () => {
    const apiLists = [
      {
        id: 1,
        name: "A",
        todos_count: 12
      },
      {
        id: 2,
        name: "B",
        todos_count: 4
      },
      {
        id: 3,
        name: "C",
        todos_count: 5
      }
    ];

    expect(lists([], fetchLists(apiLists)), [
      {
        id: 1,
        name: "A"
      },
      {
        id: 2,
        name: "B"
      },
      {
        id: 3,
        name: "C"
      }
    ]);
  });
});
