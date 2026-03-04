const API_URL = window.location.hostname === 'localhost' 
  ? 'http://localhost:8080'
  : 'https://plans-production-fca8.up.railway.app';

window.API = {
  get: async (endpoint) => {
    try {
      const res = await fetch(`${API_URL}${endpoint}`);
      const text = await res.text();
      try {
        return JSON.parse(text);
      } catch {
        return text;
      }
    } catch (error) {
      console.error('API GET error:', error);
      throw error;
    }
  },
  
  post: async (endpoint, body) => {
    try {
      const res = await fetch(`${API_URL}${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });
      const text = await res.text();
      try {
        return JSON.parse(text);
      } catch {
        return text;
      }
    } catch (error) {
      console.error('API POST error:', error);
      throw error;
    }
  }
};
