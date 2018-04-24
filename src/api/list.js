import {listUrl} from "./config";

export async function getAll() {
  return fetch(`${listUrl}?format=json`).then(
    response => response.json()
  );
}

export async function create(name) {
  let form = new FormData();
  form.append("name", name);

  return fetch(listUrl, {
    method: "POST",
    body: form,
    mode: "cors"
  }).then(response => response.json());
}

export async function remove(id) {
  return fetch(
    `${listUrl}${id}?format=json`,
    {
      method: "DELETE",
      mode: "cors"
    }
  );
}

export async function update(id, name) {
  let form = new FormData();
  form.append("name", name);

  return fetch(`${listUrl}${id}`, {
    method: "PUT",
    body: form,
    mode: "cors"
  }).then(response => response.json());
}
