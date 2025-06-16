import axiosInstance from '@/utils/AxiosBase';
import { endpointConfig } from '@/config/app.config';
import { Login, Register } from '@/@types/auth';

export const login = async ({ email, password }: Login) => {
  const response = await axiosInstance.post(endpointConfig.auth.login, { email, password });

  return response.data;
};

export const register = async (data: Register) => {
  const response = await axiosInstance.post(endpointConfig.auth.register, data);

  return response.data;
};

export const getInfo = async () => {
  const response = await axiosInstance.get(endpointConfig.auth.getInfo);

  return response.data;
};

export const refreshToken = async () => {
  const response = await axiosInstance.get(endpointConfig.auth.refreshToken);

  return response.data;
};
