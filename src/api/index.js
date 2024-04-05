export const apiGet = (url) => fetch(url).then(v => v.json());

export const apiPut = (url, id, obj) => () => {
  return fetch(`${url}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(obj),
    headers: new Headers({ 'Content-type': 'application/json' })
  }).then(resp => resp.json())
    .then(r => {
      if (r.error) {
        return ({ error: r.validation })
      }
      return r;
    })
};

export const apiPost = (url, obj) => () => {
  return fetch(`${url}`, {
    method: 'POST',
    body: JSON.stringify(obj),
    headers: new Headers({ 'Content-type': 'application/json' })
  }).then(resp => resp.json())
    .then(r => {
      if (r.error) {
        return ({ error: r.validation })
      }
      return r;
    })
};

export const apiDelete = (url, id) => () => {
  return fetch(`${url}/${id}`, {
    method: 'DELETE',
    headers: new Headers({ 'Content-type': 'application/json' })
  }).then(resp => resp.json())
    .then(r => {
      if (r.error) {
        return ({ error: r.validation })
      }
      return r;
    })
};
