import { useAuthStore } from '@/store/auth.store';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import authService from '@/services/AuthService';

export const useLogin = () => {
  const setAccessToken = useAuthStore(s => s.setAccessToken);
  const setUser = useAuthStore(s => s.setUser);

  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: authService.login,
    onSuccess: async data => {
      setAccessToken(data.accessToken);
      setUser(data.user);

      console.log('Access Token: ', data.accessToken);
      console.log('User: ', data.user);

      await queryClient.invalidateQueries(['info']);
    },
    onError: error => {
      console.error('로그인 API 에러: ', error.message);
    },
  });
};
