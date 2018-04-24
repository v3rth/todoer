export function parseToDoFromAPI(apiToDo) {
  return {
    id: apiToDo.id,
    list: apiToDo.todo_list,
    name: apiToDo.name,
    isCompleted: apiToDo.is_complete
  }
}

export function parseList(apiList) {
  return {
    id: apiList.id,
    name: apiList.name,
  }
}
