export const apiGet = (url) => fetch(url).then(v => v.json());

export const apiPut = (url, id, obj) => () => {
  return fetch(`${url}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(obj),
    headers: new Headers({ 'Content-type': 'application/json' })
  }).then(resp => resp.json())
};
