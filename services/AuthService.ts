import axiosBase from '@/services/axios/AxiosBase';

export const apiLogin = async data => {
  await axiosBase.post('/auth/login', { data });
};
