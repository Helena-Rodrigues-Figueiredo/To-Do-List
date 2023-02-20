import axios from 'axios';

const HOST = process.env.VUE_APP_API_HOST || 'localhost';
const PROTOCOL = process.env.VUE_APP_API_PROTOCOL || 'http';

const axiosInstance = axios.create({
  baseURL: `${PROTOCOL}://${HOST}`,
  headers: {
    'Content-type': 'application/json'
  }
});

export default axiosInstance;
//