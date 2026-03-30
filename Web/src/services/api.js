const API_URL = import.meta.env.VITE_API_URL;

export const api = {
  get: (path) => fetch(`${API_URL}${path}`).then(r => r.json()),
  post: (path, data) => fetch(`${API_URL}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }).then(r => r.json()),
  put: (path, data) => fetch(`${API_URL}${path}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }).then(r => r.json()),
  delete: (path) => fetch(`${API_URL}${path}`, {
    method: 'DELETE'
  }).then(r => r.json()),
};
