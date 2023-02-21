import axios from 'axios';

const axiosInstance = axios.create({
  // caso queria rodar o backend localmente, utilize a baseURL que está comentada
  // e comente  a primeira
  baseURL: 'https://to-do-list-backend.up.railway.app/',
  // baseURL: 'http://localhost:3001',
  headers: {
    'Content-type': 'application/json'
  }
});

export default axiosInstance;