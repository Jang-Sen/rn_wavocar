import {
  forgotPassword,
  getInfo,
  login,
  refreshToken,
  register,
  resetPassword,
  validationEmail,
  verificationEmail,
} from '@/api/auth';
import { Login, Register } from '@/@types/auth';

const authService = {
  login: async ({ email, password }: Login) => {
    return await login({ email, password });
  },
  register: async (data: Register) => {
    return await register(data);
  },
  forgot_password: async ({ email }: any) => {
    return await forgotPassword({ email });
  },
  reset_password: async ({ password, token }: any) => {
    return await resetPassword({ password, token });
  },
  verification_email: async ({ email }: any) => {
    return await verificationEmail({ email });
  },
  validation_email: async ({ email, code }: any) => {
    return await validationEmail({ email, code });
  },
  getInfo: async () => {
    return await getInfo();
  },
  getRefreshToken: async () => {
    return await refreshToken();
  },
};

export default authService;
