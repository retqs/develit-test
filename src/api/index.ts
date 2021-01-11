import axios from 'axios';

const api = axios.create({
  baseURL: 'https://www.swapi.tech/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
