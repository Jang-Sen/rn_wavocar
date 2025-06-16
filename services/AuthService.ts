import { getInfo, login, refreshToken, register } from '@/api/auth';
import { Login, Register } from '@/@types/auth';

const authService = {
  login: async ({ email, password }: Login) => {
    return await login({ email, password });
  },
  register: async (data: Register) => {
    return await register(data);
  },
  getInfo: async () => {
    return await getInfo();
  },
  getRefreshToken: async () => {
    return await refreshToken();
  },
};

export default authService;
