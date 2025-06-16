import axios, { InternalAxiosRequestConfig } from 'axios';
import appConfig from '@/config/app.config';
import { useAuthStore } from '@/store/auth.store';

interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
  _retry?: boolean;
}

const axiosInstance = axios.create({
  baseURL: appConfig.apiPrefix,
  timeout: 60000,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.response.use(
  config => {
    const token = useAuthStore.getState().accessToken;
    console.log('토큰 발급: ', token);
    if (token) config.headers.Authorization = `Bearer ${token}`;

    return config;
  },
  // response => response,
  // error => {
  //   console.error('API Error: ', error.response?.data || error.message);
  //
  //   return Promise.reject(error);
  // },
);

export default axiosInstance;
