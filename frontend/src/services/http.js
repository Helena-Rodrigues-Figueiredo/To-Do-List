import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://to-do-list-backend.up.railway.app/',
  headers: {
    'Content-type': 'application/json'
  }
});

export default axiosInstance;