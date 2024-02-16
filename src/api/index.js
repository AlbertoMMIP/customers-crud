const apiGet = (url) => fetch(url).then(v => v.json());

export default apiGet;