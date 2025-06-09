import axiosBase from '@/utils/AxiosBase';

export const apiLogin = async data => {
  await axiosBase.post('/auth/login', { data });
};
