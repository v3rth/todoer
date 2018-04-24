import {listUrl, todosUrl} from "./config";

export async function getAll() {
  return fetch(`${todosUrl}?format=json`)
      .then(response => response.json());
}

export async function getFromList(id) {
  return fetch(`${listUrl}${id}/?format=json`)
      .then(response => response.json());
}

export async function create(list, name, isCompleted) {
  let form = new FormData();
  form.append("name", name);
  form.append("is_complete", isCompleted);
  form.append("todo_list", list);

  return fetch(todosUrl, {
    method: "POST",
    body: form,
    mode: "cors"
  }).then(response => response.json());
}

export async function get(id) {
  return fetch(`${todosUrl}${id}?format=json`)
      .then(response => response.json());
}

export async function update({ id, name, isCompleted, list }) {
  let form = new FormData();
  form.append("name", name);
  form.append("is_complete", isCompleted);
  form.append("todo_list", list);

  return fetch(`${todosUrl}${id}/`, {
    method: "PUT",
    body: form,
    mode: "cors"
  }).then(response => response.json());
}

export async function remove(id) {
  return fetch(`${listUrl}${id}`, {
    method: "DELETE",
    mode: "cors"
  });
}
