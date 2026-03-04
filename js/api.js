const API_URL = window.location.hostname === 'localhost' 
  ? 'http://localhost:8080'
  : 'https://plans-production-fca8.up.railway.app';

window.API = {
  get: (endpoint) => fetch(`${API_URL}${endpoint}`).then(r => r.json()),
  post: (endpoint, body) => fetch(`${API_URL}${endpoint}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  }).then(r => r.json())
};
