import axios from 'axios';
import appConfig from '@/config/app.config';

const axiosInstance = axios.create({
  baseURL: appConfig.apiPrefix,
  timeout: 60000,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.response.use(
  response => response,
  error => {
    console.error('API Error: ', error.response?.data || error.message);

    return Promise.reject(error);
  },
);

export default axiosInstance;
